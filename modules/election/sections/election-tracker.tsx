"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MenuTabs from "../components/menu-tabs";
import { ElectionStats } from "@/lib/constants";
import UpcomingCandidatesSection from "./upcoming-candidates";
import CandidatesTab from "./candidates-tab";
import { useState } from "react";
import { useAppStore, ElectionType } from "@/store/useAppStore";
import { useTranslation } from "react-i18next";

const ElectionTracker = () => {
  const [selectedTab, setSelectedTab] = useState("upcoming");
  const { electionType, setElectionType, language, setLanguage } =
    useAppStore();
  const { t } = useTranslation();

  const electionTypes: ElectionType[] = [
    "presidential",
    "governorship",
    "lga",
    "wards",
  ];

  const languages = [
    { code: "en", name: "English" },
    { code: "ha", name: "Hausa" },
    { code: "yo", name: "Yoruba" },
    { code: "ig", name: "Igbo" },
  ];

  return (
    <div className="bg-white w-full rounded-[12px] ">
      <div className="flex p-[20px] justify-between w-full items-center">
        <h2 className="font-semibold text-[18px] md:text-[24px]">
          {t("election_tracker")}
        </h2>
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="capitalize">
                {languages.find((l) => l.code === language)?.name || "Language"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                >
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="text-[#F5F5F5] text-base bg-[#FE9206] rounded-[5px] capitalize">
                {t(electionType)}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {electionTypes.map((type) => (
                <DropdownMenuItem
                  key={type}
                  onClick={() => setElectionType(type)}
                  className="capitalize"
                >
                  {t(type)}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <MenuTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {selectedTab === "upcoming" && (
        <>
          <div className="p-[20px] grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ElectionStats.map((stat) => (
              <div
                key={stat.id}
                className="border-[#F5F5F5] p-[20px] bg-white shadow rounded-[9px]"
              >
                <div className="flex justify-between w-full">
                  <h2 className="text-[#8A8A8A]  text-xs">
                    {t(stat.i18nKey || stat.name)}
                  </h2>
                  <stat.Icon />
                </div>
                <p className="text-[#121212] font-semibold text-lg  md:text-[24px]">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
          <div className="p-[20px]">
            <UpcomingCandidatesSection />
          </div>
        </>
      )}
      {selectedTab === "candidate" && <CandidatesTab />}
    </div>
  );
};

export default ElectionTracker;
