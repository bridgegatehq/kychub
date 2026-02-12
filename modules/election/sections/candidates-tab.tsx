"use client";
import { candidates } from "@/lib/constants";
import React, { useState } from "react";
import PartySection from "../components/party-section";
import { useAppStore } from "@/store/useAppStore";
import { useTranslation } from "react-i18next";
import { nigerianParties } from "@/utils/parties";
import { electionYears, nigerianStates } from "@/lib/past-elections-data";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const CandidatesTab = () => {
  const { electionType, selectedState, setSelectedState } = useAppStore();
  const { t } = useTranslation();
  const [selectedYear, setSelectedYear] = useState<number>(2023);

  // Group candidates by party
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

  // Separate winner party candidates from the rest
  const winnerCandidates = winnerParty ? groupedByParty[winnerParty] : null;
  const otherParties = Object.entries(groupedByParty).filter(
    ([party]) => party !== winnerParty
  );

  return (
    <div className="p-[20px]">
      {/* Year Selector */}
      <div className="mb-6">
        <h3 className="text-sm text-center text-[#2F2F2F] mb-4 font-medium">
          Select Election Year
        </h3>
        <div className="flex gap-3 flex-wrap">
          {electionYears.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer ${selectedYear === year
                  ? "bg-[#FE9206] text-white shadow-md"
                  : year === 2027
                    ? "bg-white text-[#2F2F2F] border border-[#2F2F2F] hover:bg-[#F5F5F5]"
                    : "bg-transparent text-[#8A8A8A] hover:text-[#2F2F2F]"
                }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {/* State Selector */}
      <div className="bg-[#FFF8EE] rounded-lg p-6 mb-8">
        <h3 className="text-center text-sm text-[#2F2F2F] mb-4 font-medium">
          Select the state to View the details
        </h3>
        <div className="flex justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-[#FE9206] text-white rounded-full px-8 py-2.5 text-sm font-medium min-w-[200px]">
                {selectedState}
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="max-h-[300px] overflow-y-auto">
              {nigerianStates.map((state) => (
                <DropdownMenuItem
                  key={state}
                  onClick={() => setSelectedState(state)}
                >
                  {state}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-[20px] md:text-[24px] font-semibold text-black mb-6">
        {selectedYear} {selectedState}{" "}
        {electionType.charAt(0).toUpperCase() + electionType.slice(1)} Election
        Candidates
      </h1>

      {/* Winner Section */}
      {winnerParty && winnerPartyData && winnerCandidates && (
        <div className="mb-8">
          {/* Winner Badge + Party Header */}
          <div className="flex flex-col items-center justify-center py-4 mb-2">
            <div className="flex items-center gap-2 mb-2">
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

          {/* Winner Candidates Card */}
          <div className="grid shadow grid-cols-1 lg:grid-cols-2 gap-6 border border-border rounded-lg p-6">
            {winnerCandidates.map((candidate) => (
              <CandidateCardInline key={candidate.id} {...candidate} />
            ))}
          </div>
        </div>
      )}

      {/* Other Party Sections */}
      <div className="space-y-8">
        {otherParties.map(([party, partyCandidates]) => {
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
  );
};

// Inline candidate card component (reused from the shared one but kept inline for clarity)
function CandidateCardInline({
  name,
  age,
  gender,
  position,
  image,
}: {
  name: string;
  age: number;
  gender: string;
  position: string;
  image: string;
}) {
  const { t } = useTranslation();
  return (
    <div className="flex gap-4 p-3 odd:lg:border-r lg:border-[#E5E5E5]">
      <div className="relative shrink-0">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={100}
          height={100}
          className="rounded-md object-cover w-[100px] h-[100px]"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-base font-medium text-[#2F2F2F] mb-3">{name}</h3>

          <div className="flex gap-4 text-sm mb-2">
            <div>
              <p className="text-xs text-[#8A8A8A] mb-1">{t("age")}</p>
              <p className="text-sm text-[#2F2F2F] font-medium">{age}</p>
            </div>
            <div>
              <p className="text-xs text-[#8A8A8A] mb-1">{t("gender")}</p>
              <p className="text-sm text-[#2F2F2F] font-medium">{gender}</p>
            </div>
            <div>
              <p className="text-xs text-[#8A8A8A] mb-1">{t("position")}</p>
              <p className="text-sm text-[#2F2F2F] font-medium">{position}</p>
            </div>
          </div>
        </div>

        <a
          href="#"
          className="text-[#FE9206] hover:text-[#E58305] text-sm font-medium flex items-center gap-1 transition-colors"
        >
          {t("see_profile")}
          <span>↗</span>
        </a>
      </div>
    </div>
  );
}

export default CandidatesTab;
