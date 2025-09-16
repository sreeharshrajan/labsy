import { z } from 'zod';

// prettier-ignore
export const PageInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string(),
    content: z.unknown(),
    isActive: z.boolean(),
    metaData: z.unknown().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().optional().nullable(),
    pageContents: z.array(z.unknown())
}).strict();

export type PageInputType = z.infer<typeof PageInputSchema>;
