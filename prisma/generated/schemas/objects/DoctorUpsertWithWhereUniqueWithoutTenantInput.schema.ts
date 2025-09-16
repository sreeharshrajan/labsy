import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema';
import { DoctorUpdateWithoutTenantInputObjectSchema } from './DoctorUpdateWithoutTenantInput.schema';
import { DoctorUncheckedUpdateWithoutTenantInputObjectSchema } from './DoctorUncheckedUpdateWithoutTenantInput.schema';
import { DoctorCreateWithoutTenantInputObjectSchema } from './DoctorCreateWithoutTenantInput.schema';
import { DoctorUncheckedCreateWithoutTenantInputObjectSchema } from './DoctorUncheckedCreateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => DoctorUpdateWithoutTenantInputObjectSchema), z.lazy(() => DoctorUncheckedUpdateWithoutTenantInputObjectSchema)]),
  create: z.union([z.lazy(() => DoctorCreateWithoutTenantInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutTenantInputObjectSchema)])
}).strict();
export const DoctorUpsertWithWhereUniqueWithoutTenantInputObjectSchema: z.ZodType<Prisma.DoctorUpsertWithWhereUniqueWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpsertWithWhereUniqueWithoutTenantInput>;
export const DoctorUpsertWithWhereUniqueWithoutTenantInputObjectZodSchema = makeSchema();
