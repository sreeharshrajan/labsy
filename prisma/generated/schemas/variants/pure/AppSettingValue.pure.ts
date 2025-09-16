import { z } from 'zod';

// prettier-ignore
export const AppSettingValueModelSchema = z.object({
    id: z.string(),
    settingId: z.string(),
    setting: z.unknown(),
    value: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable()
}).strict();

export type AppSettingValueModelType = z.infer<typeof AppSettingValueModelSchema>;
