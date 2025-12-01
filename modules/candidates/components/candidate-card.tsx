import Image from "next/image"
import Link from "next/link"

interface CandidateCardProps {
  name: string
  age: number
  gender: string
  position: string
  image: string
}

export default function CandidateCard({ name, age, gender, position, image }: CandidateCardProps) {
  return (
    <div className="flex gap-4 p-2 odd:lg:border-r lg:border-[#E5E5E5]">
      <div className="relative shrink-0">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={100}
          height={100}
          className="rounded-[3px] object-cover"
        />
      </div>

      <div className="flex-1">
        <h3 className="text-lg  text-[#2F2F2F] mb-2">{name}</h3>

        <div className="flex gap-6 text-sm  mb-3">
          <div>
            <p className="text-xs text-[#2F2F2F80]">Age</p>
            <p className=" text-[#2F2F2F]">{age}</p>
          </div>
          <div>
            <p className="text-xs text-[#2F2F2F80]">Gender</p>
            <p className=" text-[#2F2F2F]">{gender}</p>
          </div>
          <div>
            <p className="text-xs text-[#2F2F2F80]">Position</p>
            <p className=" text-[#2F2F2F]">{position}</p>
          </div>
        </div>

        <Link href="#" className="text-[#FE9206] hover:text-amber-600 text-xs  flex items-center gap-1">
          See profile
          <span>↗</span>
        </Link>
      </div>
    </div>
  )
}
