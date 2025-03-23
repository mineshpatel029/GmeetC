"use client"

import { useState, useEffect } from "react"
import StatusBar from "@/components/status-bar"
import MainParticipant from "@/components/main-participant"
import ParticipantGrid from "@/components/participant-grid"
import ControlBar from "@/components/control-bar"
import { getParticipants } from "@/data/participants"
import type { Participant } from "@/data/participants"

interface MeetingRoomProps {
  participantCount: number
}

export default function MeetingRoom({ participantCount }: MeetingRoomProps) {
  const [participants, setParticipants] = useState<Participant[]>([])
  const [mainParticipant, setMainParticipant] = useState<Participant | null>(null)

  useEffect(() => {
    // Get participants based on the selected count
    const allParticipants = getParticipants(participantCount)
    setParticipants(allParticipants)

    // Set the first participant as the main presenter
    if (allParticipants.length > 0) {
      setMainParticipant(allParticipants[0])
    }
  }, [participantCount])

  const handleParticipantClick = (participant: Participant) => {
    setMainParticipant(participant)
  }

  if (!mainParticipant) return null

  return (
    <div className="flex flex-col w-full h-screen">
      <StatusBar presenter={mainParticipant} />

      <div className="flex flex-col lg:flex-row flex-1 p-4 gap-4 overflow-hidden">
        <div className="lg:flex-1">
          <MainParticipant participant={mainParticipant} />
        </div>

        <div className="lg:w-1/4 min-w-[280px]">
          <ParticipantGrid
            participants={participants.filter((p) => p.id !== mainParticipant.id)}
            onParticipantClick={handleParticipantClick}
          />
        </div>
      </div>

      <ControlBar meetingName="Class meeting" />
    </div>
  )
}

