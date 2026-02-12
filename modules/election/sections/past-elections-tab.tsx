"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useAppStore } from "@/store/useAppStore";
import { useTranslation } from "react-i18next";
import { nigerianParties } from "@/utils/parties";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import CandidateCard from "@/modules/candidates/components/candidate-card";
import {
  electionYears,
  nigerianStates,
  pastElectionData,
} from "@/lib/past-elections-data";

const PastElectionsTab = () => {
  const { electionType, selectedState, setSelectedState } = useAppStore();
  const { t } = useTranslation();
  const [selectedYear, setSelectedYear] = useState<number>(2023);

  const data = pastElectionData[selectedYear];
  const winnerPartyData = data
    ? nigerianParties.find((p) => p.short === data.winnerParty)
    : null;

  const getPartyLogo = (partyShort: string) => {
    return nigerianParties.find((p) => p.short === partyShort)?.logo;
  };

  const formatVotes = (votes: number) => {
    return votes.toLocaleString();
  };

  return (
    <div className="p-[20px]">
      {/* Info Banner */}
      <div className="bg-[#FFF8EE] border border-[#FEE6B8] rounded-lg p-4 mb-6">
        <div className="flex gap-2 items-start">
          <div className="mt-0.5 shrink-0">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="9" cy="9" r="9" fill="#FE9206" />
              <path
                d="M9 5V9.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle cx="9" cy="12.5" r="0.75" fill="white" />
            </svg>
          </div>
          <div className="text-sm text-[#5A5A5A] space-y-1">
            <p className="font-medium text-[#2F2F2F]">
              The winning candidate must secure the majority of the vote and at
              least 25% of the vote in two thirds of the states.
            </p>
            <p>
              These results are sourced from INEC&apos;s result viewing platform
              (IReV) and LGA collation centres and should not be taken as final
              results.
            </p>
            <p>
              Declared results have been announced by INEC in Abuja. Provisional
              results reflect collation only at the Local Government Area level.
            </p>
          </div>
        </div>
      </div>

      {/* Select Election Year */}
      <div className="mb-6">
        <h3 className="text-center text-sm text-[#2F2F2F] mb-4 font-medium">
          Select Election Year
        </h3>
        <div className="flex gap-3 justify-center flex-wrap">
          {electionYears.map((year) => (
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

      {/* Select State */}
      <div className="mb-8">
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

      {data ? (
        <>
          {/* Election Winner */}
          <div className="mb-10">
            <h2 className="text-[20px] md:text-[24px] font-semibold text-[#2F2F2F] mb-6">
              {selectedYear} {t(electionType)} Election Winner
            </h2>

            {/* Winner Party Header */}
            {winnerPartyData && (
              <div className="flex items-center justify-center gap-2 mb-6">
                {winnerPartyData.logo && (
                  <div className="relative w-6 h-6">
                    <Image
                      src={winnerPartyData.logo}
                      alt={`${data.winnerParty} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                <span className="text-lg font-semibold text-[#2F2F2F]">
                  {data.winnerParty}
                </span>
              </div>
            )}

            {/* Winner Candidates */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 border border-[#F5F5F5] rounded-lg p-6 shadow-sm">
              {data.winners.map((winner, idx) => (
                <CandidateCard key={idx} {...winner} />
              ))}
            </div>
          </div>

          {/* Votes Per Party */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-[20px] md:text-[24px] font-semibold text-[#2F2F2F]">
                Votes Per Party
              </h2>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="bg-[#FE9206] text-white rounded-[5px] text-sm px-4 py-2">
                    {selectedState} State
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

            <div className="space-y-6">
              {data.votesPerParty.map((partyVote, idx) => {
                const logo = getPartyLogo(partyVote.party);
                return (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center gap-3">
                      {logo ? (
                        <div className="relative w-6 h-6 shrink-0">
                          <Image
                            src={logo}
                            alt={`${partyVote.party} logo`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-6 h-6 bg-[#FE9206] rounded shrink-0" />
                      )}
                      <span className="text-sm font-medium text-[#2F2F2F] min-w-[60px]">
                        {partyVote.party}
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex-1 bg-[#F5F5F5] rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-[#FE9206] h-full rounded-full transition-all duration-500"
                          style={{ width: `${partyVote.percentage}%` }}
                        />
                      </div>
                      <span className="text-sm text-[#2F2F2F] whitespace-nowrap min-w-[200px] text-right">
                        <span className="font-semibold">
                          {formatVotes(partyVote.votes)}
                        </span>{" "}
                        Votes{" "}
                        <span className="text-[#8A8A8A] text-xs">
                          ({partyVote.percentage}%)
                        </span>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* LGA Results */}
          <div className="space-y-10">
            {data.lgaResults.map((lga, lgaIdx) => (
              <div key={lgaIdx}>
                <h3 className="text-[18px] font-semibold text-[#2F2F2F] mb-1">
                  {lga.name}{" "}
                  <span className="text-[#8A8A8A] font-normal text-sm">
                    ({formatVotes(lga.totalVotes)} Votes)
                  </span>
                </h3>

                <div className="overflow-x-auto mt-4">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[#E5E5E5]">
                        <th className="text-left text-xs font-semibold text-[#8A8A8A] uppercase py-3 pr-4">
                          Candidate
                        </th>
                        <th className="text-left text-xs font-semibold text-[#8A8A8A] uppercase py-3 pr-4">
                          Party
                        </th>
                        <th className="text-left text-xs font-semibold text-[#8A8A8A] uppercase py-3 pr-4">
                          Votes
                        </th>
                        <th className="text-left text-xs font-semibold text-[#8A8A8A] uppercase py-3 pr-4">
                          % Margin
                        </th>
                        <th className="text-left text-xs font-semibold text-[#8A8A8A] uppercase py-3">
                          Won
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {lga.results.map((result, resultIdx) => {
                        const logo = getPartyLogo(result.party);
                        return (
                          <tr
                            key={resultIdx}
                            className="border-b border-[#F5F5F5]"
                          >
                            <td className="py-3 pr-4 text-sm text-[#2F2F2F]">
                              {result.candidate}
                            </td>
                            <td className="py-3 pr-4">
                              <div className="flex items-center gap-2">
                                {logo ? (
                                  <div className="relative w-5 h-5 shrink-0">
                                    <Image
                                      src={logo}
                                      alt={`${result.party} logo`}
                                      fill
                                      className="object-contain"
                                    />
                                  </div>
                                ) : (
                                  <div className="w-5 h-5 bg-[#FE9206] rounded shrink-0" />
                                )}
                                <span className="text-sm text-[#2F2F2F]">
                                  {result.party}
                                </span>
                              </div>
                            </td>
                            <td className="py-3 pr-4 text-sm text-[#2F2F2F]">
                              {formatVotes(result.votes)}
                            </td>
                            <td className="py-3 pr-4 text-sm text-[#2F2F2F]">
                              {result.marginPercent}%
                            </td>
                            <td className="py-3">
                              {result.won ? (
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                >
                                  <circle
                                    cx="10"
                                    cy="10"
                                    r="10"
                                    fill="#E8F5E9"
                                  />
                                  <path
                                    d="M6 10L9 13L14 7"
                                    stroke="#4CAF50"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              ) : (
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                >
                                  <circle
                                    cx="10"
                                    cy="10"
                                    r="10"
                                    fill="#FFEBEE"
                                  />
                                  <path
                                    d="M7 7L13 13M13 7L7 13"
                                    stroke="#F44336"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                  />
                                </svg>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-20 text-[#8A8A8A]">
          <p className="text-lg">No election data available for {selectedYear}</p>
          <p className="text-sm mt-2">
            Please select a different year or check back later.
          </p>
        </div>
      )}
    </div>
  );
};

export default PastElectionsTab;
