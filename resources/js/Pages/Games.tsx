import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import Heading from "@/Components/Heading";
import { typesenseInstantsearchAdapter } from "@/lib/typesense";
import Hero from "../Components/Hero";
import {
    Configure,
    HitsPerPage,
    InfiniteHits,
    InstantSearch,
    SearchBox,
    SortBy,
} from "react-instantsearch";
import Hit from "@/Components/Hit";
import Filter from "@/Components/Filter";

export default function Games({
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    return (
        <>
            <Head title="Steam Games released from 2013 - 2023" />
            <div className="min-h-screen bg-zinc-100 font-sans text-black antialiased dark:bg-zinc-950 dark:text-white">
                <Heading />
                <main className="flex flex-grow flex-col items-center gap-3">
                    <Hero />
                    <InstantSearch
                        indexName="games"
                        searchClient={
                            typesenseInstantsearchAdapter.searchClient
                        }
                        future={{ preserveSharedStateOnUnmount: true }}
                    >
                        <div className="w-full px-3 py-3 lg:px-14">
                            <div className="flex w-full justify-start gap-3 md:w-2/3 lg:w-2/5">
                                <HitsPerPage
                                    classNames={{
                                        root: "flex w-1/2 justify-start",
                                        select: "w-full rounded-md border border-zinc-800 bg-white p-2 focus:outline-none dark:bg-zinc-900 dark:text-white/70",
                                    }}
                                    items={[
                                        {
                                            label: "12 per page",
                                            value: 12,
                                            default: true,
                                        },
                                        {
                                            label: "15 per page",
                                            value: 15,
                                        },
                                    ]}
                                />
                                <SortBy
                                    classNames={{
                                        root: "flex w-1/2 justify-start",
                                        select: "w-full rounded-md border border-zinc-800 bg-white p-2 focus:outline-none dark:bg-zinc-900 dark:text-white/70",
                                    }}
                                    items={[
                                        { label: "Relevance", value: "games" },
                                        {
                                            label: "Price Ascending",
                                            value: "games/sort/price:asc",
                                        },
                                        {
                                            label: "Price Descending",
                                            value: "games/sort/price:desc",
                                        },
                                        {
                                            label: "Positive Reviews",
                                            value: "games/sort/positive:desc",
                                        },
                                        {
                                            label: "Negative Reviews",
                                            value: "games/sort/negative:desc",
                                        },
                                    ]}
                                />
                            </div>
                        </div>
                        <SearchBox
                            placeholder="Search for games by title or steamID..."
                            classNames={{
                                root: "w-full flex justify-center lg:px-14 px-3",
                                form: "w-full",
                                input: "w-full rounded focus:border-[#FF2D20] dark:border-zinc-800 dark:bg-black",
                            }}
                        />
                        <div className="flex w-full gap-10 px-3 lg:px-14 lg:py-10">
                            <Filter />
                            <InfiniteHits
                                hitComponent={Hit}
                                showPrevious={false}
                                classNames={{
                                    root: "align-center flex w-full animate-fadein flex-col items-end opacity-0 [--fadein-delay:10ms]",
                                    list: "mb-10 grid w-full grid-cols-1 justify-center gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3",
                                    loadMore:
                                        "w-full text-center hover:cursor-pointer hover:underline",
                                }}
                            />
                        </div>
                    </InstantSearch>
                    <div className="grid w-5/6 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:w-4/5 lg:grid-cols-3"></div>
                </main>
                <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                    Laravel v{laravelVersion} (PHP v{phpVersion})
                </footer>
            </div>
        </>
    );
}
