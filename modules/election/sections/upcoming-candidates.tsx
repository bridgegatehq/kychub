"use client";
import { candidates } from "@/lib/constants";
import React from "react";
import PartySection from "../components/party-section";
import { useAppStore } from "@/store/useAppStore";
import { useTranslation } from "react-i18next";
import { nigerianParties } from "@/utils/parties";

const UpcomingCandidatesSection = () => {
  const { electionYear, electionType } = useAppStore();
  const { t } = useTranslation();

  const groupedByParty = candidates.reduce((acc, candidate) => {
    const party = candidate.party;
    if (!acc[party]) {
      acc[party] = [];
    }
    acc[party].push(candidate);
    return acc;
  }, {} as Record<string, typeof candidates>);
  return (
    <div className="border-[#F5F5F5] border rounded-[18px]  p-4">
      <h1 className="text-[18px] font-semibold text-black capitalize">
        {electionYear} {t(electionType)} {t("upcoming_candidates")}
      </h1>

      {Object.entries(groupedByParty).map(([party, partyCandidates]) => {
        const partyLogo = nigerianParties.find((p) => p.short === party)?.logo;
        return (
          <PartySection
            key={party}
            party={party}
            candidates={partyCandidates}
            logo={partyLogo}
          />
        );
      })}
    </div>
  );
};

export default UpcomingCandidatesSection;
