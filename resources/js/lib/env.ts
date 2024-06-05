import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
    /**
     * The prefix that client-side variables must have. This is enforced both at
     * a type-level and at runtime.
     */
    clientPrefix: "VITE_",

    client: {
        VITE_APP_NAME: z.string().min(1),
        VITE_TYPESENSE_READ_ONLY_API_KEY: z.string().min(1),
        VITE_TYPESENSE_HOST: z.string().min(1),
        // Parse the string as a number https://env.t3.gg/docs/recipes#numbers
        VITE_TYPESENSE_PORT: z
            .string()
            .transform((s) => parseInt(s, 10))
            .pipe(z.number()),
        VITE_TYPESENSE_PROTOCOL: z.string().min(1),
    },

    /**
     * What object holds the environment variables at runtime. This is usually
     * `process.env` or `import.meta.env`.
     */
    runtimeEnv: import.meta.env,

    /**
     * By default, this library will feed the environment variables directly to
     * the Zod validator.
     *
     * This means that if you have an empty string for a value that is supposed
     * to be a number (e.g. `PORT=` in a ".env" file), Zod will incorrectly flag
     * it as a type mismatch violation. Additionally, if you have an empty string
     * for a value that is supposed to be a string with a default value (e.g.
     * `DOMAIN=` in an ".env" file), the default value will never be applied.
     *
     * In order to solve these issues, we recommend that all new projects
     * explicitly specify this option as true.
     */
    emptyStringAsUndefined: true,
});
