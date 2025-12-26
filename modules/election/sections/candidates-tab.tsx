"use client";
import { candidates } from "@/lib/constants";
import React, { useState } from "react";
import PartySection from "../components/party-section";
import { useAppStore } from "@/store/useAppStore";
import { useTranslation } from "react-i18next";
import { nigerianParties } from "@/utils/parties";
import Image from "next/image";

const CandidatesTab = () => {
  const { electionType } = useAppStore();
  const { t } = useTranslation();
  const [selectedYear, setSelectedYear] = useState<number>(2023);

  const years = [2023, 2027];

  const groupedByParty = candidates.reduce((acc, candidate) => {
    const party = candidate.party;
    if (!acc[party]) {
      acc[party] = [];
    }
    acc[party].push(candidate);
    return acc;
  }, {} as Record<string, typeof candidates>);

  // Determine winner party (for demo, PDP is winner in 2023)
  const winnerParty = selectedYear === 2023 ? "PDP" : null;
  const winnerPartyData = winnerParty
    ? nigerianParties.find((p) => p.short === winnerParty)
    : null;

  return (
    <div className="p-[20px]">
      {/* Year Selector */}
      <div className="mb-6">
        <h3 className="text-sm text-[#2F2F2F] mb-3 font-medium">
          Select Election Year
        </h3>
        <div className="flex gap-3">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                selectedYear === year
                  ? "bg-[#FE9206] text-white shadow-md"
                  : "bg-[#F5F5F5] text-[#2F2F2F] hover:bg-[#E5E5E5]"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Card */}
      <div className="bg-white border border-[#F5F5F5] rounded-[18px] p-6">
        {/* Title */}
        <h1 className="text-[20px] md:text-[24px] font-semibold text-black mb-6">
          {selectedYear} {t(electionType)} Election Candidates
        </h1>

        {/* Winner Badge - Only show for past elections */}
        {winnerParty && winnerPartyData && (
          <div className="flex flex-col items-center justify-center py-6 mb-8 bg-[#FAFAFA] rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🏆</span>
              <span className="text-base font-semibold text-[#2F2F2F]">
                WINNER
              </span>
              <span className="text-2xl">🏆</span>
            </div>
            <div className="flex items-center gap-2">
              {winnerPartyData.logo && (
                <div className="relative w-6 h-6">
                  <Image
                    src={winnerPartyData.logo}
                    alt={`${winnerParty} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              <span className="text-lg font-semibold text-[#2F2F2F]">
                {winnerParty}
              </span>
            </div>
          </div>
        )}

        {/* Party Sections */}
        <div className="space-y-8">
          {Object.entries(groupedByParty).map(([party, partyCandidates]) => {
            const partyLogo = nigerianParties.find(
              (p) => p.short === party
            )?.logo;
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
      </div>
    </div>
  );
};

export default CandidatesTab;
