"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

interface CandidateCardProps {
  name: string;
  age: number;
  gender: string;
  position: string;
  image: string;
}

export default function CandidateCard({
  name,
  age,
  gender,
  position,
  image,
}: CandidateCardProps) {
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

        <Link
          href="#"
          className="text-[#FE9206] hover:text-[#E58305] text-sm font-medium flex items-center gap-1 transition-colors"
        >
          {t("see_profile")}
          <span>↗</span>
        </Link>
      </div>
    </div>
  );
}
