import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema';
import { DoctorUpdateWithoutTenantInputObjectSchema } from './DoctorUpdateWithoutTenantInput.schema';
import { DoctorUncheckedUpdateWithoutTenantInputObjectSchema } from './DoctorUncheckedUpdateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => DoctorUpdateWithoutTenantInputObjectSchema), z.lazy(() => DoctorUncheckedUpdateWithoutTenantInputObjectSchema)])
}).strict();
export const DoctorUpdateWithWhereUniqueWithoutTenantInputObjectSchema: z.ZodType<Prisma.DoctorUpdateWithWhereUniqueWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpdateWithWhereUniqueWithoutTenantInput>;
export const DoctorUpdateWithWhereUniqueWithoutTenantInputObjectZodSchema = makeSchema();
