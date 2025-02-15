import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function QuarterCard() {
    const courtNumber = 3
    const players = [
        { name: "J. Doe", avatar: "" },
        { name: "J. Smith", avatar: "" },
        { name: "M. Johnson", avatar: "" },
        { name: "S. Williams", avatar: "" },
    ]
    const timeSlot = "2:00 PM - 3:00 PM"

    return (
        <Card className="w-[calc(50%-12px)] h-[calc(50%-12px)] flex flex-col">
            <CardHeader className="flex-grow-0">
                <CardTitle className="text-5xl font-bold">Court {courtNumber}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
                <div className="space-y-4">
                <h3 className="text-3xl">Current Players:</h3>
                <ul className="space-y-4">
                    {players.map((player, index) => (
                    <li key={index} className="flex items-center space-x-4">
                        <Avatar>
                            <AvatarImage src={player.avatar} alt={player.name} />
                            <AvatarFallback>{player.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className="text-2xl font-semibold">{player.name}</span>
                    </li>
                    ))}
                </ul>
                </div>
                <div className="mt-4">
                <h3 className="text-3xl font-semibold">Time Slot:</h3>
                <p className="text-4xl font-light">{timeSlot}</p>
                </div>
            </CardContent>
        </Card>
    );
}