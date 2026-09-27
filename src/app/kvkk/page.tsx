"use client";

import React from "react";
import { LegalDocumentViewer } from "@/components/legal/LegalDocumentViewer";
import { getLocalizedLegalDoc } from "@/data/legal-data";
import { useLanguage } from "@/context/LanguageContext";

export default function KvkkPage() {
  const { language } = useLanguage();
  const document = getLocalizedLegalDoc("kvkk", language);

  return <LegalDocumentViewer document={document} currentType="kvkk" />;
}
