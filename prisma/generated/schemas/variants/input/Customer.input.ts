import { z } from 'zod';

import { UserTitleSchema } from '../../enums/UserTitle.schema';
import { GenderSchema } from '../../enums/Gender.schema';
import { BloodGroupSchema } from '../../enums/BloodGroup.schema';
import { MaritalStatusSchema } from '../../enums/MaritalStatus.schema';
// prettier-ignore
export const CustomerInputSchema = z.object({
    id: z.string(),
    title: UserTitleSchema.optional().nullable(),
    name: z.string(),
    email: z.string().optional().nullable(),
    phone: z.string().optional().nullable(),
    dateOfBirth: z.date().optional().nullable(),
    gender: GenderSchema.optional().nullable(),
    bloodGroup: BloodGroupSchema.optional().nullable(),
    maritalStatus: MaritalStatusSchema.optional().nullable(),
    aadharNumber: z.string().optional().nullable(),
    panNumber: z.string().optional().nullable(),
    passportNumber: z.string().optional().nullable(),
    knownAllergies: z.array(z.string()),
    chronicConditions: z.array(z.string()),
    medications: z.array(z.string()),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().optional().nullable(),
    tenantId: z.string(),
    tenant: z.unknown(),
    ReportInvoice: z.array(z.unknown()),
    Report: z.array(z.unknown()),
    customerAddresses: z.array(z.unknown())
}).strict();

export type CustomerInputType = z.infer<typeof CustomerInputSchema>;
