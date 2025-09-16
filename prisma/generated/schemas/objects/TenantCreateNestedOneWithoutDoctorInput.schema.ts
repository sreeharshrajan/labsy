import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateWithoutDoctorInputObjectSchema } from './TenantCreateWithoutDoctorInput.schema';
import { TenantUncheckedCreateWithoutDoctorInputObjectSchema } from './TenantUncheckedCreateWithoutDoctorInput.schema';
import { TenantCreateOrConnectWithoutDoctorInputObjectSchema } from './TenantCreateOrConnectWithoutDoctorInput.schema';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantCreateWithoutDoctorInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutDoctorInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutDoctorInputObjectSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional()
}).strict();
export const TenantCreateNestedOneWithoutDoctorInputObjectSchema: z.ZodType<Prisma.TenantCreateNestedOneWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateNestedOneWithoutDoctorInput>;
export const TenantCreateNestedOneWithoutDoctorInputObjectZodSchema = makeSchema();
