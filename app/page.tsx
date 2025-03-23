"use client"

import { useState } from "react"
import ParticipantSelector from "@/components/participant-selector"
import MeetingRoom from "@/components/meeting-room"

export default function Home() {
  const [participantCount, setParticipantCount] = useState<number | null>(null)

  return (
    <main className="min-h-screen flex items-center justify-center">
      {participantCount === null ? (
        <ParticipantSelector onSelect={setParticipantCount} />
      ) : (
        <MeetingRoom participantCount={participantCount} />
      )}
    </main>
  )
}

