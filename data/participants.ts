export interface Participant {
  id: string
  name: string
  image: string
}

const participantData: Participant[] = [
  {
    id: "1",
    name: "Fathima",
    image: "/images/participant1.png",
  },
  {
    id: "2",
    name: "Jenelia",
    image: "/images/participant1.png",
  },
  {
    id: "3",
    name: "Joe Carlson",
    image: "/images/participant2.png",
  },
  {
    id: "4",
    name: "Lucy Sera",
    image: "/images/participant4.png",
  },
  {
    id: "5",
    name: "Sara Johns",
    image: "/images/participant3.png",
  },
  {
    id: "6",
    name: "Jennifer David",
    image: "/images/participant1.png",
  },
  {
    id: "7",
    name: "Rachel Green",
    image: "/images/participant3.png",
  },
  {
    id: "8",
    name: "Carol Mark",
    image: "/images/participant4.png",
  },
  {
    id: "9",
    name: "Monica Geller",
    image: "/images/participant2.png",
  },
]

export function getParticipants(count: number): Participant[] {
  // Ensure we don't exceed the available participants
  const limitedCount = Math.min(count, participantData.length)
  return participantData.slice(0, limitedCount)
}

