import { z } from 'zod';

export const BloodGroupSchema = z.enum(['A_POSITIVE', 'A_NEGATIVE', 'B_POSITIVE', 'B_NEGATIVE', 'AB_POSITIVE', 'AB_NEGATIVE', 'O_POSITIVE', 'O_NEGATIVE'])

export type BloodGroup = z.infer<typeof BloodGroupSchema>;