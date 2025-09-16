import { z } from 'zod';

export const MaritalStatusSchema = z.enum(['SINGLE', 'MARRIED', 'DIVORCED', 'WIDOWED', 'SEPARATED', 'OTHER'])

export type MaritalStatus = z.infer<typeof MaritalStatusSchema>;