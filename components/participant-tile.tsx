"use client"

import Image from "next/image"
import type { Participant } from "@/data/participants"

interface ParticipantTileProps {
  participant: Participant
  onClick: () => void
}

export default function ParticipantTile({ participant, onClick }: ParticipantTileProps) {
  return (
    <div className="relative aspect-video rounded-lg overflow-hidden cursor-pointer" onClick={onClick}>
      <Image
        src={participant.image || "/placeholder.svg"}
        alt={participant.name}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent">
        <p className="text-white text-sm font-medium">{participant.name}</p>
      </div>
    </div>
  )
}

