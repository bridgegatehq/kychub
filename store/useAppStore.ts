import { create } from "zustand";
import i18n from "@/lib/i18n";

export type ElectionType = "presidential" | "governorship" | "lga" | "wards";

interface AppState {
  electionType: ElectionType;
  electionYear: string;
  language: string;
  setElectionType: (type: ElectionType) => void;
  setElectionYear: (year: string) => void;
  setLanguage: (lang: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  electionType: "presidential",
  electionYear: "2027",
  language: "en",
  setElectionType: (type) => set({ electionType: type }),
  setElectionYear: (year) => set({ electionYear: year }),
  setLanguage: (lang) => {
    if (i18n.changeLanguage) {
      i18n.changeLanguage(lang);
    }
    set({ language: lang });
  },
}));
