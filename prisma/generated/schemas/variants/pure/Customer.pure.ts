import { z } from 'zod';

import { UserTitleSchema } from '../../enums/UserTitle.schema';
import { GenderSchema } from '../../enums/Gender.schema';
import { BloodGroupSchema } from '../../enums/BloodGroup.schema';
import { MaritalStatusSchema } from '../../enums/MaritalStatus.schema';
// prettier-ignore
export const CustomerModelSchema = z.object({
    id: z.string(),
    title: UserTitleSchema.nullable(),
    name: z.string(),
    email: z.string().nullable(),
    phone: z.string().nullable(),
    dateOfBirth: z.date().nullable(),
    gender: GenderSchema.nullable(),
    bloodGroup: BloodGroupSchema.nullable(),
    maritalStatus: MaritalStatusSchema.nullable(),
    aadharNumber: z.string().nullable(),
    panNumber: z.string().nullable(),
    passportNumber: z.string().nullable(),
    knownAllergies: z.array(z.string()),
    chronicConditions: z.array(z.string()),
    medications: z.array(z.string()),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
    tenantId: z.string(),
    tenant: z.unknown(),
    ReportInvoice: z.array(z.unknown()),
    Report: z.array(z.unknown()),
    customerAddresses: z.array(z.unknown())
}).strict();

export type CustomerModelType = z.infer<typeof CustomerModelSchema>;
