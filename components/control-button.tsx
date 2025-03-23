"use client"

import type { ReactNode } from "react"

interface ControlButtonProps {
  icon: ReactNode
  onClick?: () => void
}

export default function ControlButton({ icon, onClick }: ControlButtonProps) {
  return (
    <button className="control-button" onClick={onClick}>
      {icon}
    </button>
  )
}

