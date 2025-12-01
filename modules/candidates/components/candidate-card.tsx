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
    <div className="flex gap-4 p-4">
      <div className="relative shrink-0">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={100}
          height={100}
          className="rounded-lg object-cover"
        />
      </div>

      <div className="flex-1">
        <h3 className="text-lg font-semibold text-foreground mb-2">{name}</h3>

        <div className="flex gap-6 text-sm text-muted-foreground mb-3">
          <div>
            <p className="text-xs text-muted-foreground">Age</p>
            <p className="font-medium text-foreground">{age}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Gender</p>
            <p className="font-medium text-foreground">{gender}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Position</p>
            <p className="font-medium text-foreground">{position}</p>
          </div>
        </div>

        <Link href="#" className="text-amber-500 hover:text-amber-600 text-sm font-medium flex items-center gap-1">
          See profile
          <span>↗</span>
        </Link>
      </div>
    </div>
  )
}
