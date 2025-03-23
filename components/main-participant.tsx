import Image from "next/image"
import type { Participant } from "@/data/participants"

interface MainParticipantProps {
  participant: Participant
}

export default function MainParticipant({ participant }: MainParticipantProps) {
  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden">
      <Image
        src={participant.image || "/placeholder.svg"}
        alt={participant.name}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 66vw"
        priority
      />
    </div>
  )
}

