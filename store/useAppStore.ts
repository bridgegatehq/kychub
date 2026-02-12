import { create } from "zustand";
import i18n from "@/lib/i18n";

export type ElectionType = "presidential" | "governorship" | "senate" | "lga" | "wards";

interface AppState {
  electionType: ElectionType;
  electionYear: string;
  selectedState: string;
  selectedConstituency: string;
  language: string;
  setElectionType: (type: ElectionType) => void;
  setElectionYear: (year: string) => void;
  setSelectedState: (state: string) => void;
  setSelectedConstituency: (constituency: string) => void;
  setLanguage: (lang: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  electionType: "presidential",
  electionYear: "2027",
  selectedState: "Oyo",
  selectedConstituency: "Oyo North",
  language: "en",
  setElectionType: (type) => set({ electionType: type }),
  setElectionYear: (year) => set({ electionYear: year }),
  setSelectedState: (state) => set({ selectedState: state }),
  setSelectedConstituency: (constituency) => set({ selectedConstituency: constituency }),
  setLanguage: (lang) => {
    if (i18n.changeLanguage) {
      i18n.changeLanguage(lang);
    }
    set({ language: lang });
  },
}));
