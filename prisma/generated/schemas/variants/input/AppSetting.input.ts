import { z } from 'zod';

// prettier-ignore
export const AppSettingInputSchema = z.object({
    id: z.string(),
    key: z.string(),
    value: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().optional().nullable(),
    values: z.array(z.unknown())
}).strict();

export type AppSettingInputType = z.infer<typeof AppSettingInputSchema>;
