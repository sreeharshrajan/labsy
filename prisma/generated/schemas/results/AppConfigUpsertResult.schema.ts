import { z } from 'zod';
export const AppConfigUpsertResultSchema = z.object({
  id: z.string(),
  appName: z.string(),
  appVersion: z.string(),
  appLogo: z.string().optional(),
  appIcon: z.string().optional(),
  appBanner: z.string().optional(),
  appDescription: z.string().optional(),
  appKeywords: z.string().optional(),
  appAuthor: z.string().optional(),
  appAuthorEmail: z.string().optional(),
  appAuthorUrl: z.string().optional(),
  appCopyright: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
});