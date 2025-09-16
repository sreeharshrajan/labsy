import { z } from 'zod';

// prettier-ignore
export const AppSettingValueInputSchema = z.object({
    id: z.string(),
    settingId: z.string(),
    setting: z.unknown(),
    value: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().optional().nullable()
}).strict();

export type AppSettingValueInputType = z.infer<typeof AppSettingValueInputSchema>;
