import { z } from 'zod';
export const DoctorCreateResultSchema = z.object({
  id: z.string(),
  name: z.string(),
  specialization: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  registrationNo: z.string().optional(),
  clinicName: z.string().optional(),
  department: z.string().optional(),
  status: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().optional(),
  tenantId: z.string(),
  tenant: z.unknown(),
  ReportInvoice: z.array(z.unknown()),
  Report: z.array(z.unknown()),
  doctorAddresses: z.array(z.unknown()),
  doctorCommissions: z.array(z.unknown()),
  doctorPayments: z.array(z.unknown()),
  DoctorCommissionLog: z.array(z.unknown())
});