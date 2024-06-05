import { useNumericMenu, UseNumericMenuProps } from "react-instantsearch";

export default function NumericMenu(props: UseNumericMenuProps) {
    const { items, refine } = useNumericMenu(props);

    return (
        <ul className="flex flex-col gap-2">
            {items.map((item) => (
                <li key={item.value}>
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            name={item.value}
                            checked={item.isRefined}
                            onChange={() => {
                                refine(item.value);
                            }}
                            className="rounded border border-gray-200 bg-gray-200 p-2 dark:border-zinc-800 dark:bg-zinc-800"
                        />
                        <span>{item.label}</span>
                    </label>
                </li>
            ))}
        </ul>
    );
}
