import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUpdateWithoutDoctorInputObjectSchema } from './TenantUpdateWithoutDoctorInput.schema';
import { TenantUncheckedUpdateWithoutDoctorInputObjectSchema } from './TenantUncheckedUpdateWithoutDoctorInput.schema';
import { TenantCreateWithoutDoctorInputObjectSchema } from './TenantCreateWithoutDoctorInput.schema';
import { TenantUncheckedCreateWithoutDoctorInputObjectSchema } from './TenantUncheckedCreateWithoutDoctorInput.schema';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TenantUpdateWithoutDoctorInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutDoctorInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantCreateWithoutDoctorInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutDoctorInputObjectSchema)]),
  where: z.lazy(() => TenantWhereInputObjectSchema).optional()
}).strict();
export const TenantUpsertWithoutDoctorInputObjectSchema: z.ZodType<Prisma.TenantUpsertWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpsertWithoutDoctorInput>;
export const TenantUpsertWithoutDoctorInputObjectZodSchema = makeSchema();
