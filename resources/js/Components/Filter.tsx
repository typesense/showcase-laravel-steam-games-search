import { RangeInput, RefinementList } from "react-instantsearch";
import NumericMenu from "./NumericMenu";

export default function Filter() {
    return (
        <aside className="hidden flex-col gap-3 lg:flex">
            <h3 className="mb-1 text-xl font-semibold">Price</h3>
            <RangeInput
                attribute="price"
                classNames={{
                    root: "mb-3 flex flex-col gap-2",
                    form: "flex flex-col gap-2",
                    input: "w-full rounded [appearance:textfield] focus:border-[#FF2D20] dark:border-zinc-800 dark:bg-black [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
                    submit: "rounded-md border border-zinc-800 bg-white p-2 focus:outline-none dark:bg-zinc-900 dark:text-white/70 dark:hover:bg-zinc-800 dark:hover:text-white/70",
                }}
            />
            <h3 className="mb-1 text-xl font-semibold">Positive Reviews</h3>
            <NumericMenu
                attribute="positive"
                items={[
                    { label: "Under 25", start: 0, end: 25 },
                    { label: "25-50", start: 25, end: 50 },
                    { label: "50-100", start: 50, end: 100 },
                    { label: "Over 100", start: 100 },
                ]}
            />
            <h3 className="mb-1 text-xl font-semibold">Negative Reviews</h3>
            <NumericMenu
                attribute="negative"
                items={[
                    { label: "Under 25", start: 0, end: 25 },
                    { label: "25-50", start: 25, end: 50 },
                    { label: "50-100", start: 50, end: 100 },
                    { label: "Over 100", start: 100 },
                ]}
            />
            <h3 className="mb-1 text-xl font-semibold">Minimum Users</h3>
            <NumericMenu
                attribute="min_owners"
                items={[
                    { label: "Under 100", start: 0, end: 100 },
                    { label: "100-1,000", start: 100, end: 1000 },
                    { label: "1,000-10,000", start: 1000, end: 10000 },
                    { label: "10,000-100,000", start: 10000, end: 100000 },
                    { label: "Over 100,000", start: 100000 },
                ]}
            />
        </aside>
    );
}
