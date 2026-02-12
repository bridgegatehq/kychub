import { create } from "zustand";
import i18n from "@/lib/i18n";

export type ElectionType = "presidential" | "governorship" | "lga" | "wards";

interface AppState {
  electionType: ElectionType;
  electionYear: string;
  selectedState: string;
  language: string;
  setElectionType: (type: ElectionType) => void;
  setElectionYear: (year: string) => void;
  setSelectedState: (state: string) => void;
  setLanguage: (lang: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  electionType: "presidential",
  electionYear: "2027",
  selectedState: "Oyo",
  language: "en",
  setElectionType: (type) => set({ electionType: type }),
  setElectionYear: (year) => set({ electionYear: year }),
  setSelectedState: (state) => set({ selectedState: state }),
  setLanguage: (lang) => {
    if (i18n.changeLanguage) {
      i18n.changeLanguage(lang);
    }
    set({ language: lang });
  },
}));
