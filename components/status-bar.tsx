import Image from "next/image"
import type { Participant } from "@/data/participants"

interface StatusBarProps {
  presenter: Participant
}

export default function StatusBar({ presenter }: StatusBarProps) {
  return (
    <div className="bg-background/80 backdrop-blur-sm p-3 border-b border-muted">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full overflow-hidden relative">
          <Image src={presenter.image || "/placeholder.svg"} alt={presenter.name} fill className="object-cover" />
        </div>
        <p className="text-foreground">{presenter.name} is presenting</p>
      </div>
    </div>
  )
}

