import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema';
import { TenantUpdateWithoutDoctorInputObjectSchema } from './TenantUpdateWithoutDoctorInput.schema';
import { TenantUncheckedUpdateWithoutDoctorInputObjectSchema } from './TenantUncheckedUpdateWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TenantUpdateWithoutDoctorInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutDoctorInputObjectSchema)])
}).strict();
export const TenantUpdateToOneWithWhereWithoutDoctorInputObjectSchema: z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutDoctorInput>;
export const TenantUpdateToOneWithWhereWithoutDoctorInputObjectZodSchema = makeSchema();
