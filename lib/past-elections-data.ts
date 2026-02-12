export interface PastElectionCandidate {
  name: string;
  party: string;
  age: number;
  gender: string;
  position: string;
  image: string;
}

export interface PartyVotes {
  party: string;
  votes: number;
  percentage: number;
}

export interface LGAResult {
  candidate: string;
  party: string;
  votes: number;
  marginPercent: number;
  won: boolean;
}

export interface LGAData {
  name: string;
  totalVotes: number;
  results: LGAResult[];
}

export interface StateElectionData {
  state: string;
  winnerParty: string;
  winners: PastElectionCandidate[];
  votesPerParty: PartyVotes[];
  lgaResults: LGAData[];
}

export const electionYears = [2023, 2027, 2031, 2035, 2039, 2043];

export const nigerianStates = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa",
  "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo",
  "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna",
  "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos",
  "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo",
  "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara",
  "FCT",
];

export const pastElectionData: Record<number, StateElectionData> = {
  2023: {
    state: "Oyo",
    winnerParty: "PDP",
    winners: [
      {
        name: "Dr. Shina Peller",
        party: "PDP",
        age: 45,
        gender: "Male",
        position: "Governor",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      },
      {
        name: "Justina Ogbonnaya",
        party: "PDP",
        age: 45,
        gender: "Male",
        position: "Deputy Governor",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
      },
    ],
    votesPerParty: [
      { party: "PDP", votes: 66305308, percentage: 44 },
      { party: "ACPN", votes: 45306308, percentage: 39 },
      { party: "APC", votes: 38305308, percentage: 36 },
      { party: "TNN", votes: 33353126, percentage: 32 },
      { party: "UPN", votes: 26254456, percentage: 28 },
      { party: "NNPP", votes: 21647243, percentage: 20 },
      { party: "SDP", votes: 19425308, percentage: 20 },
      { party: "LP", votes: 17435134, percentage: 18 },
      { party: "Others", votes: 16245253, percentage: 16 },
    ],
    lgaResults: [
      {
        name: "Oyo North",
        totalVotes: 25093093,
        results: [
          { candidate: "Dr Shina Peller", party: "PDP", votes: 651535, marginPercent: 42, won: true },
          { candidate: "Daniel Samuel", party: "SDP", votes: 558612, marginPercent: 37, won: false },
          { candidate: "Oyebamiji Oluwasola", party: "ACPN", votes: 267400, marginPercent: 35, won: false },
          { candidate: "Josh Michael", party: "NNPP", votes: 487441, marginPercent: 34, won: false },
          { candidate: "Jichola Oyebola", party: "LP", votes: 653518, marginPercent: 27, won: false },
          { candidate: "Femi Babalola", party: "APGA", votes: 653518, marginPercent: 18, won: false },
          { candidate: "Emmanuel Amuneke", party: "APC", votes: 449003, marginPercent: 9, won: false },
        ],
      },
      {
        name: "Akinyele",
        totalVotes: 25093093,
        results: [
          { candidate: "Dr Shina Peller", party: "PDP", votes: 651535, marginPercent: 42, won: true },
          { candidate: "Daniel Samuel", party: "SDP", votes: 558612, marginPercent: 37, won: false },
          { candidate: "Oyebamiji Oluwasola", party: "ACPN", votes: 267400, marginPercent: 35, won: false },
          { candidate: "Josh Michael", party: "NNPP", votes: 487441, marginPercent: 34, won: false },
          { candidate: "Jichola Oyebola", party: "LP", votes: 653518, marginPercent: 27, won: false },
          { candidate: "Femi Babalola", party: "APGA", votes: 653518, marginPercent: 18, won: false },
          { candidate: "Emmanuel Amuneke", party: "APC", votes: 449003, marginPercent: 9, won: false },
        ],
      },
      {
        name: "Ibarapa North",
        totalVotes: 25093093,
        results: [
          { candidate: "Dr Shina Peller", party: "PDP", votes: 651535, marginPercent: 42, won: true },
          { candidate: "Daniel Samuel", party: "SDP", votes: 558612, marginPercent: 37, won: false },
          { candidate: "Oyebamiji Oluwasola", party: "ACPN", votes: 267400, marginPercent: 35, won: false },
          { candidate: "Josh Michael", party: "NNPP", votes: 487441, marginPercent: 34, won: false },
          { candidate: "Jichola Oyebola", party: "LP", votes: 653518, marginPercent: 27, won: false },
          { candidate: "Femi Babalola", party: "APGA", votes: 653518, marginPercent: 18, won: false },
          { candidate: "Emmanuel Amuneke", party: "APC", votes: 449003, marginPercent: 9, won: false },
        ],
      },
    ],
  },
};
