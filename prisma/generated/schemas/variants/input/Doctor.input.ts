import { z } from 'zod';

import { DoctorStatusSchema } from '../../enums/DoctorStatus.schema';
// prettier-ignore
export const DoctorInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    specialization: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    phone: z.string().optional().nullable(),
    registrationNo: z.string().optional().nullable(),
    clinicName: z.string().optional().nullable(),
    department: z.string().optional().nullable(),
    status: DoctorStatusSchema,
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().optional().nullable(),
    tenantId: z.string(),
    tenant: z.unknown(),
    ReportInvoice: z.array(z.unknown()),
    Report: z.array(z.unknown()),
    doctorAddresses: z.array(z.unknown()),
    doctorCommissions: z.array(z.unknown()),
    doctorPayments: z.array(z.unknown()),
    DoctorCommissionLog: z.array(z.unknown())
}).strict();

export type DoctorInputType = z.infer<typeof DoctorInputSchema>;
