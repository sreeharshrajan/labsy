import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorScalarWhereInputObjectSchema } from './DoctorScalarWhereInput.schema';
import { DoctorUpdateManyMutationInputObjectSchema } from './DoctorUpdateManyMutationInput.schema';
import { DoctorUncheckedUpdateManyWithoutTenantInputObjectSchema } from './DoctorUncheckedUpdateManyWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => DoctorUpdateManyMutationInputObjectSchema), z.lazy(() => DoctorUncheckedUpdateManyWithoutTenantInputObjectSchema)])
}).strict();
export const DoctorUpdateManyWithWhereWithoutTenantInputObjectSchema: z.ZodType<Prisma.DoctorUpdateManyWithWhereWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpdateManyWithWhereWithoutTenantInput>;
export const DoctorUpdateManyWithWhereWithoutTenantInputObjectZodSchema = makeSchema();
