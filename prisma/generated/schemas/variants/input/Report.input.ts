import { z } from 'zod';

import { ReportStatusSchema } from '../../enums/ReportStatus.schema';
import { CustomerTypeSchema } from '../../enums/CustomerType.schema';
// prettier-ignore
export const ReportInputSchema = z.object({
    id: z.string(),
    reportCode: z.string().optional().nullable(),
    fileUrl: z.string().optional().nullable(),
    collectedPlace: z.string().optional().nullable(),
    notes: z.string().optional().nullable(),
    status: ReportStatusSchema,
    customerType: CustomerTypeSchema.optional().nullable(),
    issuedAt: z.date().optional().nullable(),
    collectedAt: z.date().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().optional().nullable(),
    version: z.number().int(),
    tenantId: z.string(),
    customerId: z.string(),
    doctorId: z.string().optional().nullable(),
    invoiceId: z.string(),
    createdBy: z.string().optional().nullable(),
    collectedBy: z.string().optional().nullable(),
    customerAddressId: z.string().optional().nullable(),
    labAddressId: z.string().optional().nullable(),
    tenant: z.unknown(),
    customer: z.unknown(),
    doctor: z.unknown().optional().nullable(),
    invoice: z.unknown(),
    details: z.array(z.unknown()),
    updateLog: z.array(z.unknown()),
    createdByUser: z.unknown().optional().nullable(),
    collectedByUser: z.unknown().optional().nullable(),
    customerAddress: z.unknown().optional().nullable(),
    labAddress: z.unknown().optional().nullable()
}).strict();

export type ReportInputType = z.infer<typeof ReportInputSchema>;
