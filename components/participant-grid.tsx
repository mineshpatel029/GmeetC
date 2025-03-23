"use client"

import ParticipantTile from "@/components/participant-tile"
import type { Participant } from "@/data/participants"
import { useMediaQuery } from "@/hooks/use-media-query"

interface ParticipantGridProps {
  participants: Participant[]
  onParticipantClick: (participant: Participant) => void
}

export default function ParticipantGrid({ participants, onParticipantClick }: ParticipantGridProps) {
  const isMobile = useMediaQuery("(max-width: 1024px)")

  return (
    <div className={`grid gap-2 h-full ${isMobile ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "grid-cols-1"}`}>
      {participants.map((participant) => (
        <ParticipantTile
          key={participant.id}
          participant={participant}
          onClick={() => onParticipantClick(participant)}
        />
      ))}
    </div>
  )
}

