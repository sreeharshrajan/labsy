import { z } from 'zod';

// prettier-ignore
export const PageModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string(),
    content: z.unknown(),
    isActive: z.boolean(),
    metaData: z.unknown().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
    pageContents: z.array(z.unknown())
}).strict();

export type PageModelType = z.infer<typeof PageModelSchema>;
