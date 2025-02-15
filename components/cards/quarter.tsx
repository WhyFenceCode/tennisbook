import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export function QuarterCard() {
    const courtNumber = 3
    const players = [
        { name: "John Doe", avatar: "" },
        { name: "Jane Smith", avatar: "" },
        { name: "Mike Johnson", avatar: "" },
        { name: "Sarah Williams", avatar: "" },
    ]
    const timeSlot = "2:00 PM - 3:00 PM"

    return (
        <Card className="w-[calc(50%-12px)] h-[calc(50%-12px)] flex flex-col">
            <CardHeader>
                <CardTitle className="text-6xl">Court 9</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col grow">
                <p className="text-4xl text-muted-foreground">J. Doe</p>
                <p className="text-4xl text-muted-foreground">A. Smith</p>
                <p className="text-4xl text-muted-foreground">F. Hobbs</p>
                <p className="text-4xl text-muted-foreground">M. Johnson</p>
            </CardContent>
            <CardFooter className="flex justify-between align-center">
                <div/>
                <p className="text-5xl">12:30 - 1:45</p>
            </CardFooter>
        </Card>
    );
}
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function TennisCourtCard() {
  // Sample data
  const courtNumber = 3
  const players = [
    { name: "John Doe", avatar: "/placeholder.svg?height=32&width=32" },
    { name: "Jane Smith", avatar: "/placeholder.svg?height=32&width=32" },
    { name: "Mike Johnson", avatar: "/placeholder.svg?height=32&width=32" },
    { name: "Sarah Williams", avatar: "/placeholder.svg?height=32&width=32" },
  ]
  const timeSlot = "2:00 PM - 3:00 PM"

  return (
    <Card className="w-full max-w-sm aspect-[3/4] flex flex-col">
      <CardHeader className="flex-grow-0">
        <CardTitle className="text-3xl font-bold text-center">Court {courtNumber}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Current Players:</h3>
          <ul className="space-y-2">
            {players.map((player, index) => (
              <li key={index} className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src={player.avatar} alt={player.name} />
                  <AvatarFallback>{player.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span>{player.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Time Slot:</h3>
          <p className="text-xl font-bold">{timeSlot}</p>
        </div>
      </CardContent>
    </Card>
  )
}