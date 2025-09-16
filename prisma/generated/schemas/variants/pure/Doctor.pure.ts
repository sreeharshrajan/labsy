import { z } from 'zod';

import { DoctorStatusSchema } from '../../enums/DoctorStatus.schema';
// prettier-ignore
export const DoctorModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    specialization: z.string().nullable(),
    email: z.string().nullable(),
    phone: z.string().nullable(),
    registrationNo: z.string().nullable(),
    clinicName: z.string().nullable(),
    department: z.string().nullable(),
    status: DoctorStatusSchema,
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
    tenantId: z.string(),
    tenant: z.unknown(),
    ReportInvoice: z.array(z.unknown()),
    Report: z.array(z.unknown()),
    doctorAddresses: z.array(z.unknown()),
    doctorCommissions: z.array(z.unknown()),
    doctorPayments: z.array(z.unknown()),
    DoctorCommissionLog: z.array(z.unknown())
}).strict();

export type DoctorModelType = z.infer<typeof DoctorModelSchema>;
