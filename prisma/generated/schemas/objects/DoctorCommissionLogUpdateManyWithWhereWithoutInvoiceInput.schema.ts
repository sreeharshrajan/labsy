import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionLogScalarWhereInputObjectSchema } from './DoctorCommissionLogScalarWhereInput.schema';
import { DoctorCommissionLogUpdateManyMutationInputObjectSchema } from './DoctorCommissionLogUpdateManyMutationInput.schema';
import { DoctorCommissionLogUncheckedUpdateManyWithoutInvoiceInputObjectSchema } from './DoctorCommissionLogUncheckedUpdateManyWithoutInvoiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorCommissionLogScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => DoctorCommissionLogUpdateManyMutationInputObjectSchema), z.lazy(() => DoctorCommissionLogUncheckedUpdateManyWithoutInvoiceInputObjectSchema)])
}).strict();
export const DoctorCommissionLogUpdateManyWithWhereWithoutInvoiceInputObjectSchema: z.ZodType<Prisma.DoctorCommissionLogUpdateManyWithWhereWithoutInvoiceInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionLogUpdateManyWithWhereWithoutInvoiceInput>;
export const DoctorCommissionLogUpdateManyWithWhereWithoutInvoiceInputObjectZodSchema = makeSchema();
