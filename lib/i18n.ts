import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(initReactI18next);

if (typeof window !== "undefined") {
  i18n.use(LanguageDetector);
}

i18n.init({
  fallbackLng: "en",
  debug: process.env.NODE_ENV === "development",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources: {
    en: {
      translation: {
        election_tracker: "Election Tracker",
        presidential: "Presidential",
        governorship: "Governorship",
        lga: "LGA",
        wards: "Wards",
        upcoming_candidates: "Upcoming Candidates",
        explore_news: "Explore latest articles and updated news",
        next_election_date: "Next election date",
        political_parties: "Political Parties",
        contesting_candidates: "Contesting Candidates",
        male_candidates: "Male Candidates",
        female_candidates: "Female Candidates",
        pwds: "PWD'S",
        age: "Age",
        gender: "Gender",
        position: "Position",
        see_profile: "See profile",
      },
    },
    ha: {
      translation: {
        election_tracker: "Bibiyar Zabe",
        presidential: "Shugaban Kasa",
        governorship: "Gwamna",
        lga: "Karamar Hukuma",
        wards: "Unguwanni",
        upcoming_candidates: "'Yan Takara Masu Zuwa",
        explore_news: "Bincika sababbin labarai",
        next_election_date: "Ranar zabe na gaba",
        political_parties: "Jam'iyyun Siyasa",
        contesting_candidates: "'Yan Takara",
        male_candidates: "'Yan Takara Maza",
        female_candidates: "'Yan Takara Mata",
        pwds: "Masu Bukata ta Musamman",
        age: "Shekaru",
        gender: "Jinsi",
        position: "Matsayi",
        see_profile: "Duba bayani",
      },
    },
    yo: {
      translation: {
        election_tracker: "Olutọpa Idibo",
        presidential: "Aare",
        governorship: "Gomina",
        lga: "Ijoba Ibile",
        wards: "Agbegbe",
        upcoming_candidates: "Awọn oludije ti n bọ",
        explore_news: "Ṣawari awọn nkan tuntun ati awọn iroyin imudojuiwọn",
        next_election_date: "Ọjọ idibo ti n bọ",
        political_parties: "Awọn Ẹgbẹ Oṣelu",
        contesting_candidates: "Awọn oludije",
        male_candidates: "Awọn oludije Okunrin",
        female_candidates: "Awọn oludije Obinrin",
        pwds: "Awọn eniyan ti o ni ailera",
        age: "Ọjọ ori",
        gender: "Akọ tabi Abo",
        position: "Ipò",
        see_profile: "Wo profaili",
      },
    },
    ig: {
      translation: {
        election_tracker: "Onye Na-eso Ntuli Aka",
        presidential: "Onye Isi Ala",
        governorship: "Gọvanọ",
        lga: "Gọọmenti ime Obodo",
        wards: "Wards",
        upcoming_candidates: "Ndị na-azọ ọkwa na-abịa",
        explore_news: "Chọpụta akụkọ kachasị ọhụrụ na mmelite",
        next_election_date: "Ụbọchị ntuli aka na-abịa",
        political_parties: "Otu ndọrọ ndọrọ ọchịchị",
        contesting_candidates: "Ndị na-azọ ọkwa",
        male_candidates: "Ndị nwoke na-azọ ọkwa",
        female_candidates: "Ndị nwanyị na-azọ ọkwa",
        pwds: "Ndị nwere nkwarụ",
        age: "Afọ",
        gender: "Okike",
        position: "Ọkwa",
        see_profile: "Hụ profaịlụ",
      },
    },
  },
});

export default i18n;
