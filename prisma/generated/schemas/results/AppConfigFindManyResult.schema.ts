import { z } from 'zod';
export const AppConfigFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});