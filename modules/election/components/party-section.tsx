import Image from "next/image";
import CandidateCard from "@/modules/candidates/components/candidate-card";

interface Candidate {
  id: number;
  name: string;
  party: string;
  age: number;
  gender: string;
  position: string;
  image: string;
}

interface PartySectionProps {
  party: string;
  candidates: Candidate[];
  logo?: string;
}

const partyEmojis: Record<string, string> = {
  PDP: "⭕",
  APC: "🔷",
};

export default function PartySection({
  party,
  candidates,
  logo,
}: PartySectionProps) {
  return (
    <section className="flex flex-col space-y-4 mb-4">
      <div className="flex items-center justify-center gap-2">
        {logo ? (
          <div className="relative w-8 h-8">
            <Image
              src={logo}
              alt={`${party} logo`}
              fill
              className="object-contain"
            />
          </div>
        ) : (
          <span className="text-xl">{partyEmojis[party]}</span>
        )}
        <h2 className="text-xl font-semibold text-[#2F2F2F]">{party}</h2>
      </div>

      <div className="grid shadow grid-cols-1 lg:grid-cols-2 gap-6 border border-border rounded-lg p-6 ">
        {candidates.map((candidate) => (
          <CandidateCard key={candidate.id} {...candidate} />
        ))}
      </div>
    </section>
  );
}
