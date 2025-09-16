import { z } from 'zod';

// prettier-ignore
export const PostResultSchema = z.object({
    id: z.string(),
    title: z.string(),
    slug: z.string(),
    metaData: z.unknown().nullable(),
    content: z.unknown(),
    isActive: z.boolean(),
    User: z.unknown(),
    userId: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable()
}).strict();

export type PostResultType = z.infer<typeof PostResultSchema>;
