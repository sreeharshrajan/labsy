import { z } from 'zod';

// prettier-ignore
export const PageContentInputSchema = z.object({
    id: z.string(),
    section: z.string(),
    content: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().optional().nullable(),
    Page: z.unknown().optional().nullable(),
    pageId: z.string().optional().nullable()
}).strict();

export type PageContentInputType = z.infer<typeof PageContentInputSchema>;
