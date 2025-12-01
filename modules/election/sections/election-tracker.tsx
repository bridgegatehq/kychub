"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MenuTabs from "../components/menu-tabs";
import { ElectionStats } from "@/lib/constants";
import UpcomingCandidatesSection from "./upcoming-candidates";
const ElectionTracker = () => {
  return (
    <div className="bg-white w-full rounded-[12px] ">
      <div className="flex p-[20px] justify-between w-full">
        <h2 className="font-semibold text-[18px] md:text-[24px]">
          Election Tracker
        </h2>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="text-[#F5F5F5] text-base bg-[#FE9206] rounded-[5px]">
                Presidency
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Presidency</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Governorship</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Logout</DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
      <MenuTabs />
      <div className="p-[20px] grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ElectionStats.map((stat) => (
          <div key={stat.id} className="border-[#F5F5F5] p-[20px] bg-white shadow rounded-[9px]">
            <div className="flex justify-between w-full">
              <h2 className="text-[#8A8A8A]  text-xs">{stat.name}</h2>
              <stat.Icon />
            </div>
            <p className="text-[#121212] font-semibold text-lg  md:text-[24px]">{stat.value}</p>
          </div>
        ))}
      </div>

      <UpcomingCandidatesSection />
    </div>
  );
};

export default ElectionTracker;
