import React from "react";
import { Icons } from "./icons";
import { DropdownMenu } from "../ui/dropdown-menu";
import { DropdownMenuContent } from "../ui/dropdown-menu";
import { DropdownMenuLabel } from "../ui/dropdown-menu";
import { DropdownMenuSeparator } from "../ui/dropdown-menu";
import { DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <div
      className="relative min-h-[620px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/hero-bg.svg)" }}
    >
      <div className="container-brand flex flex-col">
        <div className="py-[19px] flex justify-between w-full items-center">
          <Icons.logo />
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">English</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>English</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Yoruba</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Logout</DropdownMenuLabel>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="flex justify-between md:flex-row flex-col items-center">
          <div className="w-full flex flex-col space-y-[22px]">
            <h1 className="text-[#121212] text-[30px] md:text-[45px] leading-[35px] md:leading-[58px] font-semibold">
              Who’s On Your Ballot? Get the Facts Before You Vote. Shape
              Nigeria’s Future.
            </h1>
            <p className="text-[#494949] text-[14px] md:text-[16px] leading-[25px]">
              Get accurate, verified details on presidential, gubernatorial, and
              legislative candidates. Explore their agendas, compare their
              visions, and follow live election updates; all from one trusted
              source.{" "}
            </p>

            <div className="flex gap-4 bg-white border-[#FE9206] border max-w-[427px] rounded-[5px] p-[15px]">
              <Search className="size-[20px]" />
              <input
                type="text"
                className="border-none bg-none outline-none w-full"
                placeholder=""
              />
            </div>
          </div>

          <div className="w-full flex h-full justify-center items-center">
            <Icons.voteWisely />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
