import { z } from 'zod';

// prettier-ignore
export const PostInputSchema = z.object({
    id: z.string(),
    title: z.string(),
    slug: z.string(),
    metaData: z.unknown().optional().nullable(),
    content: z.unknown(),
    isActive: z.boolean(),
    User: z.unknown(),
    userId: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().optional().nullable()
}).strict();

export type PostInputType = z.infer<typeof PostInputSchema>;
