"use client"

import { useState } from "react"

interface ParticipantSelectorProps {
  onSelect: (count: number) => void
}

export default function ParticipantSelector({ onSelect }: ParticipantSelectorProps) {
  const [count, setCount] = useState(4)

  return (
    <div className="bg-muted p-8 rounded-lg max-w-md w-full">
      <h1 className="text-2xl font-bold mb-6 text-center">How many participants will join?</h1>

      <div className="mb-6">
        <label htmlFor="participant-count" className="block mb-2 text-muted-foreground">
          Select participants (2-8):
        </label>
        <div className="flex items-center gap-4">
          <input
            type="range"
            id="participant-count"
            min={2}
            max={8}
            value={count}
            onChange={(e) => setCount(Number.parseInt(e.target.value))}
            className="flex-1 h-2 bg-background rounded-lg appearance-none cursor-pointer"
          />
          <span className="text-xl font-medium w-8 text-center">{count}</span>
        </div>
      </div>

      <button
        onClick={() => onSelect(count)}
        className="w-full py-3 px-4 bg-accent text-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors"
      >
        Join Meeting
      </button>
    </div>
  )
}

