// Senatorial districts / constituencies for each state
export const senateConstituencies: Record<string, string[]> = {
  Abia: ["Abia North", "Abia Central", "Abia South"],
  Adamawa: ["Adamawa North", "Adamawa Central", "Adamawa South"],
  "Akwa Ibom": ["Akwa Ibom North-West", "Akwa Ibom North-East", "Akwa Ibom South"],
  Anambra: ["Anambra North", "Anambra Central", "Anambra South"],
  Bauchi: ["Bauchi North", "Bauchi Central", "Bauchi South"],
  Bayelsa: ["Bayelsa East", "Bayelsa Central", "Bayelsa West"],
  Benue: ["Benue North-West", "Benue North-East", "Benue South"],
  Borno: ["Borno North", "Borno Central", "Borno South"],
  "Cross River": ["Cross River North", "Cross River Central", "Cross River South"],
  Delta: ["Delta North", "Delta Central", "Delta South"],
  Ebonyi: ["Ebonyi North", "Ebonyi Central", "Ebonyi South"],
  Edo: ["Edo North", "Edo Central", "Edo South"],
  Ekiti: ["Ekiti North", "Ekiti Central", "Ekiti South"],
  Enugu: ["Enugu North", "Enugu East", "Enugu West"],
  Gombe: ["Gombe North", "Gombe Central", "Gombe South"],
  Imo: ["Imo North", "Imo East", "Imo West"],
  Jigawa: ["Jigawa North-West", "Jigawa North-East", "Jigawa South"],
  Kaduna: ["Kaduna North", "Kaduna Central", "Kaduna South"],
  Kano: ["Kano North", "Kano Central", "Kano South"],
  Katsina: ["Katsina North", "Katsina Central", "Katsina South"],
  Kebbi: ["Kebbi North", "Kebbi Central", "Kebbi South"],
  Kogi: ["Kogi West", "Kogi Central", "Kogi East"],
  Kwara: ["Kwara North", "Kwara Central", "Kwara South"],
  Lagos: ["Lagos West", "Lagos Central", "Lagos East"],
  Nasarawa: ["Nasarawa North", "Nasarawa West", "Nasarawa South"],
  Niger: ["Niger North", "Niger East", "Niger South"],
  Ogun: ["Ogun West", "Ogun Central", "Ogun East"],
  Ondo: ["Ondo North", "Ondo Central", "Ondo South"],
  Osun: ["Osun West", "Osun Central", "Osun East"],
  Oyo: ["Oyo North", "Oyo Central", "Oyo South"],
  Plateau: ["Plateau North", "Plateau Central", "Plateau South"],
  Rivers: ["Rivers West", "Rivers East", "Rivers South-East"],
  Sokoto: ["Sokoto North", "Sokoto East", "Sokoto South"],
  Taraba: ["Taraba North", "Taraba Central", "Taraba South"],
  Yobe: ["Yobe North", "Yobe East", "Yobe South"],
  Zamfara: ["Zamfara North", "Zamfara Central", "Zamfara West"],
  FCT: ["FCT"],
};

// Upcoming senate election announcements per state
export interface SenateAnnouncement {
  constituency: string;
  date: string;
}

export const senateAnnouncements: Record<string, SenateAnnouncement[]> = {
  Oyo: [
    { constituency: "Oyo Central", date: "16th Nov. 2025" },
    { constituency: "Oyo North", date: "16th Nov. 2025" },
  ],
  Lagos: [
    { constituency: "Lagos West", date: "16th Nov. 2025" },
    { constituency: "Lagos Central", date: "16th Nov. 2025" },
  ],
  Kano: [
    { constituency: "Kano North", date: "16th Nov. 2025" },
    { constituency: "Kano Central", date: "16th Nov. 2025" },
  ],
};
