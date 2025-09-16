import { z } from 'zod';

export const CustomerTypeSchema = z.enum(['REFERRED', 'SELF', 'OTHER'])

export type CustomerType = z.infer<typeof CustomerTypeSchema>;