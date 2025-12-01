import { candidates } from '@/lib/constants'
import React from 'react'
import PartySection from '../components/party-section'

const UpcomingCandidatesSection = () => {
      const groupedByParty = candidates.reduce(
    (acc, candidate) => {
      const party = candidate.party
      if (!acc[party]) {
        acc[party] = []
      }
      acc[party].push(candidate)
      return acc
    },
    {} as Record<string, typeof candidates>,
  )
  return (
   <div className="border-[#F5F5F5] border rounded-[18px] p-[20px]">
        <h1 className="text-[18px] font-semibold text-foreground mb-2">2027 Presidential Election Candidates</h1>

        {Object.entries(groupedByParty).map(([party, partyCandidates]) => (
          <PartySection key={party} party={party} candidates={partyCandidates} />
        ))}
      </div>
  )
}

export default UpcomingCandidatesSection