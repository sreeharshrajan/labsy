import { z } from 'zod';

// prettier-ignore
export const PageContentResultSchema = z.object({
    id: z.string(),
    section: z.string(),
    content: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
    Page: z.unknown().nullable(),
    pageId: z.string().nullable()
}).strict();

export type PageContentResultType = z.infer<typeof PageContentResultSchema>;
