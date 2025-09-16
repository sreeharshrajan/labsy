import { z } from 'zod';

// prettier-ignore
export const PageContentModelSchema = z.object({
    id: z.string(),
    section: z.string(),
    content: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
    Page: z.unknown().nullable(),
    pageId: z.string().nullable()
}).strict();

export type PageContentModelType = z.infer<typeof PageContentModelSchema>;
