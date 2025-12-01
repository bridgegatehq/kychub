import CandidateCard from "@/modules/candidates/components/candidate-card"

interface Candidate {
  id: number
  name: string
  party: string
  age: number
  gender: string
  position: string
  image: string
}

interface PartySectionProps {
  party: string
  candidates: Candidate[]
}

const partyEmojis: Record<string, string> = {
  PDP: "⭕",
  APC: "🔷",
}

export default function PartySection({ party, candidates }: PartySectionProps) {
  return (
    <section className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-xl font-semibold text-foreground">
          {partyEmojis[party]} {party}
        </h2>
      </div>

      <div className="grid shadow grid-cols-1 lg:grid-cols-2 gap-6 border border-border rounded-lg p-6 bg-card">
        {candidates.map((candidate) => (
          <div key={candidate.id} className="">
            <CandidateCard {...candidate} />
          </div>
        ))}
      </div>
    </section>
  )
}
