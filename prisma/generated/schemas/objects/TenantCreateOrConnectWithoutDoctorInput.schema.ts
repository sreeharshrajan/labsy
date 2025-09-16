import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantCreateWithoutDoctorInputObjectSchema } from './TenantCreateWithoutDoctorInput.schema';
import { TenantUncheckedCreateWithoutDoctorInputObjectSchema } from './TenantUncheckedCreateWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantCreateWithoutDoctorInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutDoctorInputObjectSchema)])
}).strict();
export const TenantCreateOrConnectWithoutDoctorInputObjectSchema: z.ZodType<Prisma.TenantCreateOrConnectWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateOrConnectWithoutDoctorInput>;
export const TenantCreateOrConnectWithoutDoctorInputObjectZodSchema = makeSchema();
