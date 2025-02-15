import { QuarterCard } from "@/components/cards/quarter"

export default function Page() {
    return (
        <div className="flex justify-between content-between h-full w-full flex-wrap">
            <QuarterCard />
            <QuarterCard />
            <QuarterCard />
            <QuarterCard />
        </div>
    );
}