import { z } from "zod";

export const gameSchema = z.object({
    id: z.number(),
    app_id: z.number(),
    name: z.string(),
    release_date: z.number(),
    price: z.number(),
    positive: z.number(),
    negative: z.number(),
    min_owners: z.number(),
    max_owners: z.number(),
    hltb_single: z.number().nullable(),
});
