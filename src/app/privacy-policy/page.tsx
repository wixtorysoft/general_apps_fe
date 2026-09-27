"use client";

import React from "react";
import { LegalDocumentViewer } from "@/components/legal/LegalDocumentViewer";
import { getLocalizedLegalDoc } from "@/data/legal-data";
import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyPolicyPage() {
  const { language } = useLanguage();
  const document = getLocalizedLegalDoc("privacy", language);

  return <LegalDocumentViewer document={document} currentType="privacy" />;
}
