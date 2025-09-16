import { z } from 'zod';

// prettier-ignore
export const AppSettingValueResultSchema = z.object({
    id: z.string(),
    settingId: z.string(),
    setting: z.unknown(),
    value: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable()
}).strict();

export type AppSettingValueResultType = z.infer<typeof AppSettingValueResultSchema>;
