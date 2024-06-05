import TypesenseInstantSearchAdapter, {
    BaseSearchParameters,
} from "typesense-instantsearch-adapter";
import { env } from "./env";

const additionalSearchParameters: BaseSearchParameters = {
    query_by: "name,app_id",
    num_typos: 0,
};

export const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
    server: {
        apiKey: import.meta.env.VITE_TYPESENSE_READ_ONLY_API_KEY || "xyz",
        nodes: [
            {
                host: import.meta.env.VITE_PUBLIC_TYPESENSE_HOST || "localhost",
                port: import.meta.env.VITE_PUBLIC_TYPESENSE_PORT || 8108,
                protocol:
                    import.meta.env.VITE_PUBLIC_TYPESENSE_PROTOCOL || "http",
            },
        ],
    },
    additionalSearchParameters,
});
