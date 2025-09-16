import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { DoctorCommissionOrderByWithRelationInputObjectSchema } from './DoctorCommissionOrderByWithRelationInput.schema';
import { DoctorOrderByWithRelationInputObjectSchema } from './DoctorOrderByWithRelationInput.schema';
import { ReportInvoiceOrderByWithRelationInputObjectSchema } from './ReportInvoiceOrderByWithRelationInput.schema';
import { ReportDetailOrderByWithRelationInputObjectSchema } from './ReportDetailOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  doctorId: SortOrderSchema.optional(),
  invoiceId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  commissionId: SortOrderSchema.optional(),
  reportDetailId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  commissionAmt: SortOrderSchema.optional(),
  commissionStatus: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  commission: z.lazy(() => DoctorCommissionOrderByWithRelationInputObjectSchema).optional(),
  doctor: z.lazy(() => DoctorOrderByWithRelationInputObjectSchema).optional(),
  invoice: z.lazy(() => ReportInvoiceOrderByWithRelationInputObjectSchema).optional(),
  reportDetail: z.lazy(() => ReportDetailOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const DoctorCommissionLogOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.DoctorCommissionLogOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogOrderByWithRelationInput>;
export const DoctorCommissionLogOrderByWithRelationInputObjectZodSchema = makeSchema();
