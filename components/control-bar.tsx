import {
  Mic,
  Video,
  CaptionsIcon as ClosedCaptions,
  HandIcon as HandRaised,
  ScreenShare,
  MoreVertical,
  Phone,
} from "lucide-react"
import ControlButton from "@/components/control-button"

interface ControlBarProps {
  meetingName: string
}

export default function ControlBar({ meetingName }: ControlBarProps) {
  return (
    <div className="p-4 flex items-center justify-between">
      <div className="text-foreground font-medium">{meetingName}</div>

      <div className="flex items-center gap-2">
        <ControlButton icon={<Mic size={20} />} />
        <ControlButton icon={<Video size={20} />} />
        <ControlButton icon={<ClosedCaptions size={20} />} />
        <ControlButton icon={<HandRaised size={20} />} />
        <ControlButton icon={<ScreenShare size={20} />} />
        <ControlButton icon={<MoreVertical size={20} />} />
        <button className="end-call-button">
          <Phone size={20} />
        </button>
      </div>

      <div className="flex items-center gap-4">
        <button className="control-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </button>
        <button className="control-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </button>
        <button className="control-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>
        <button className="control-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        </button>
      </div>
    </div>
  )
}

