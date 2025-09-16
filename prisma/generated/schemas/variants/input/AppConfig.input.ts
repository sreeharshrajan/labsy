import { z } from 'zod';

// prettier-ignore
export const AppConfigInputSchema = z.object({
    id: z.string(),
    appName: z.string(),
    appVersion: z.string(),
    appLogo: z.string().optional().nullable(),
    appIcon: z.string().optional().nullable(),
    appBanner: z.string().optional().nullable(),
    appDescription: z.string().optional().nullable(),
    appKeywords: z.string().optional().nullable(),
    appAuthor: z.string().optional().nullable(),
    appAuthorEmail: z.string().optional().nullable(),
    appAuthorUrl: z.string().optional().nullable(),
    appCopyright: z.string().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type AppConfigInputType = z.infer<typeof AppConfigInputSchema>;
