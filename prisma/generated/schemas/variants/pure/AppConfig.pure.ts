import { z } from 'zod';

// prettier-ignore
export const AppConfigModelSchema = z.object({
    id: z.string(),
    appName: z.string(),
    appVersion: z.string(),
    appLogo: z.string().nullable(),
    appIcon: z.string().nullable(),
    appBanner: z.string().nullable(),
    appDescription: z.string().nullable(),
    appKeywords: z.string().nullable(),
    appAuthor: z.string().nullable(),
    appAuthorEmail: z.string().nullable(),
    appAuthorUrl: z.string().nullable(),
    appCopyright: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type AppConfigModelType = z.infer<typeof AppConfigModelSchema>;
