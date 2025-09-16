import { z } from 'zod';

export const UserTitleSchema = z.enum(['MR', 'MRS', 'MS', 'DR', 'PROF'])

export type UserTitle = z.infer<typeof UserTitleSchema>;