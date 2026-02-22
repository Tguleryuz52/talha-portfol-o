"use client";

import React, { useEffect, useState } from "react";
import { ToggleButton } from "@once-ui-system/core";

export const LanguageToggle: React.FC = () => {
  const [locale, setLocale] = useState("tr");

  useEffect(() => {
    const match = document.cookie.match(/locale=(\w+)/);
    if (match) setLocale(match[1]);
  }, []);

  const toggle = () => {
    const next = locale === "tr" ? "en" : "tr";
    document.cookie = `locale=${next};path=/;max-age=31536000`;
    setLocale(next);
    window.location.reload();
  };

  return (
    <ToggleButton
      onClick={toggle}
      aria-label={`Switch to ${locale === "tr" ? "English" : "Türkçe"}`}
      label={locale === "tr" ? "EN" : "TR"}
    />
  );
};
