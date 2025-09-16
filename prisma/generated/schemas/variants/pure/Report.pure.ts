import { z } from 'zod';

import { ReportStatusSchema } from '../../enums/ReportStatus.schema';
import { CustomerTypeSchema } from '../../enums/CustomerType.schema';
// prettier-ignore
export const ReportModelSchema = z.object({
    id: z.string(),
    reportCode: z.string().nullable(),
    fileUrl: z.string().nullable(),
    collectedPlace: z.string().nullable(),
    notes: z.string().nullable(),
    status: ReportStatusSchema,
    customerType: CustomerTypeSchema.nullable(),
    issuedAt: z.date().nullable(),
    collectedAt: z.date().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
    version: z.number().int(),
    tenantId: z.string(),
    customerId: z.string(),
    doctorId: z.string().nullable(),
    invoiceId: z.string(),
    createdBy: z.string().nullable(),
    collectedBy: z.string().nullable(),
    customerAddressId: z.string().nullable(),
    labAddressId: z.string().nullable(),
    tenant: z.unknown(),
    customer: z.unknown(),
    doctor: z.unknown().nullable(),
    invoice: z.unknown(),
    details: z.array(z.unknown()),
    updateLog: z.array(z.unknown()),
    createdByUser: z.unknown().nullable(),
    collectedByUser: z.unknown().nullable(),
    customerAddress: z.unknown().nullable(),
    labAddress: z.unknown().nullable()
}).strict();

export type ReportModelType = z.infer<typeof ReportModelSchema>;
