import { gameSchema } from "@/lib/schema";
import { format } from "date-fns/format";
import { Calendar, Clock, ThumbsDown, ThumbsUp, UserRound } from "lucide-react";
import { z } from "zod";

type Game = z.infer<typeof gameSchema>;

export default function Hit({ hit }: { hit: Game }) {
    return (
        <div className=" animate-fadein  [--fadein-delay:10ms] opacity-0 w-full  flex flex-col aspect-3/4  transition-all hover:shadow-xl pb-[10px]">
            <div className="flex flex-col  relative rounded-lg  shadow-lg  items-center p-4 bg-white dark:bg-zinc-900">
                {" "}
                <div className=" w-full mb-2">
                    <h3
                        className="text-xl  truncate tracking-tight
                            font-bold"
                    >
                        {hit.name}
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        #{hit.app_id}
                    </p>
                </div>
                <div className="flex justify-between w-full mb-4">
                    <div className="flex  items-center gap-1 w-2/3 text-sm text-zinc-500 dark:text-zinc-400">
                        <p>{formatNumber(hit.positive)}</p>
                        <ThumbsUp size={16} /> •{" "}
                        <p>{formatNumber(hit.negative)}</p>
                        <ThumbsDown size={16} />
                    </div>
                    <div className="flex  items-center gap-1  text-sm text-zinc-500 dark:text-zinc-400">
                        <span className="italic">
                            {formatNumber(hit.min_owners)}
                        </span>
                        ~{" "}
                        <span className="italic">
                            {formatNumber(hit.max_owners)}
                        </span>
                        <UserRound size={16} />
                    </div>
                </div>
                <div className="flex justify-between w-full mb-5">
                    <div className="flex  items-bottom gap-1 w-2/3 text-sm text-zinc-500 dark:text-zinc-400">
                        <Calendar size={16} />
                        <p>
                            {format(
                                new Date(hit.release_date * 1000),
                                "MMM dd, yyyy",
                            )}
                        </p>
                    </div>
                    {hit.hltb_single && (
                        <div className="flex  items-center gap-1  text-sm text-zinc-500 dark:text-zinc-400">
                            <p>{hit.hltb_single} hrs</p>
                            <Clock size={16} />
                        </div>
                    )}
                </div>
                <div className="absolute mb-[-10px] mr-3  border-zinc-950 border-2 bottom-0  font-extrabold right-0 text-green-200  bg-white dark:bg-green-800 py-1 px-2 rounded-lg">
                    {hit.price === 0 ? (
                        <h1 className="text-xl">Free</h1>
                    ) : (
                        <h1 className="text-xl">${hit.price}</h1>
                    )}
                </div>
            </div>
        </div>
    );
}

function formatNumber(num: number) {
    const thresholds: { [key: string]: string } = {
        1000000: "M",
        1000: "K",
    };

    const threshold = Object.keys(thresholds)
        .sort((a, b) => Number(b) - Number(a))
        .find((threshold) => num >= Number(threshold));

    return threshold
        ? (num / Number(threshold)).toFixed(1) + thresholds[threshold]
        : num.toString();
}
