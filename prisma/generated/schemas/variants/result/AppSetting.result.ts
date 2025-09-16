import { z } from 'zod';

// prettier-ignore
export const AppSettingResultSchema = z.object({
    id: z.string(),
    key: z.string(),
    value: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
    values: z.array(z.unknown())
}).strict();

export type AppSettingResultType = z.infer<typeof AppSettingResultSchema>;
