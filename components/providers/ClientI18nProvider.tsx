"use client";

import "@/lib/i18n";
import { ReactNode } from "react";

export default function ClientI18nProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
