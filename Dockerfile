# ==========================================
# 1. AŞAMA: Bağımlılıkları Yükleme (Deps)
# ==========================================
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Paket dosyalarını kopyalayıp temiz ve tutarlı kurulum yapıyoruz
COPY package.json package-lock.json* ./
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# ==========================================
# 2. AŞAMA: Derleme (Builder)
# ==========================================
FROM node:20-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js standalone build çıktısı üretiyoruz
ENV NEXT_TELEMETRY_DISABLED 1
# Düşük RAM'li sunucularda OOM / donma olmaması için bellek limiti
ENV NODE_OPTIONS="--max-old-space-size=2048"

RUN npm run build

# ==========================================
# 3. AŞAMA: Canlı Çalıştırma (Runner)
# ==========================================
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV PORT 5107
ENV HOSTNAME "0.0.0.0"

# Güvenlik için kök olmayan (non-root) kullanıcı oluşturuyoruz
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Statik dosyaları ve standalone derleme çıktılarını kopyalıyoruz
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Next.js prerender / ISR önbellek izinleri
RUN mkdir -p .next/cache && chown -R nextjs:nodejs .next

USER nextjs

EXPOSE 5107

# Doğrudan bağımsız sunucuyu başlatıyoruz
CMD ["node", "server.js"]