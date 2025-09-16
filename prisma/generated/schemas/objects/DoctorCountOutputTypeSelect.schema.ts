import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  ReportInvoice: z.boolean().optional(),
  Report: z.boolean().optional(),
  doctorAddresses: z.boolean().optional(),
  doctorCommissions: z.boolean().optional(),
  doctorPayments: z.boolean().optional(),
  DoctorCommissionLog: z.boolean().optional()
}).strict();
export const DoctorCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.DoctorCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCountOutputTypeSelect>;
export const DoctorCountOutputTypeSelectObjectZodSchema = makeSchema();
