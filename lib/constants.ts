import { Icons } from "@/components/shared/icons";

export const ElectionStats = [
  {
    id: 1,
    Icon: Icons.calendar,
    name: "Next election date",
    i18nKey: "next_election_date",
    value: "Feb 28, 2027",
  },
  {
    id: 2,
    name: "Political Parties",
    i18nKey: "political_parties",
    Icon: Icons.flag,
    value: 40,
  },
  {
    id: 3,
    name: "Contesting Candidates",
    i18nKey: "contesting_candidates",
    Icon: Icons.candidates,
    value: 40,
  },
  {
    id: 4,
    name: "Male Candidates",
    i18nKey: "male_candidates",
    Icon: Icons.male,
    value: 40,
  },

  {
    id: 5,
    name: "Female Candidates",
    i18nKey: "female_candidates",
    Icon: Icons.female,
    value: 40,
  },
  {
    id: 6,
    name: `PWD'S`,
    i18nKey: "pwds",
    Icon: Icons.pwd,
    value: "02",
  },
];

export const candidates = [
  {
    id: 1,
    name: "Dr. Shina Peller",
    party: "PDP",
    age: 45,
    gender: "Male",
    position: "Governor",
    isWinner: true,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
  },
  {
    id: 2,
    name: "Justina Ogbonnaya",
    party: "PDP",
    age: 45,
    gender: "Male",
    position: "Deputy Governor",
    isWinner: true,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
  },
  {
    id: 3,
    name: "Israel Faizul",
    party: "APC",
    age: 45,
    gender: "Male",
    position: "Governor",
    isWinner: false,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
  },
  {
    id: 4,
    name: "Tolani Bayode",
    party: "APC",
    age: 45,
    gender: "Male",
    position: "Deputy Governor",
    isWinner: false,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
  },
  {
    id: 5,
    name: "Adese Samson",
    party: "APC",
    age: 45,
    gender: "Male",
    position: "Governor",
    isWinner: false,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
  },
  {
    id: 6,
    name: "Solomon Ideh",
    party: "APC",
    age: 45,
    gender: "Male",
    position: "Deputy Governor",
    isWinner: false,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
  },
  {
    id: 7,
    name: "Esther Joel",
    party: "APC",
    age: 45,
    gender: "Male",
    position: "Governor",
    isWinner: false,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
  },
  {
    id: 8,
    name: "Josh Michael",
    party: "APC",
    age: 45,
    gender: "Male",
    position: "Deputy Governor",
    isWinner: false,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
  },
];
