import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema';
import { DoctorCreateWithoutTenantInputObjectSchema } from './DoctorCreateWithoutTenantInput.schema';
import { DoctorUncheckedCreateWithoutTenantInputObjectSchema } from './DoctorUncheckedCreateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DoctorCreateWithoutTenantInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutTenantInputObjectSchema)])
}).strict();
export const DoctorCreateOrConnectWithoutTenantInputObjectSchema: z.ZodType<Prisma.DoctorCreateOrConnectWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCreateOrConnectWithoutTenantInput>;
export const DoctorCreateOrConnectWithoutTenantInputObjectZodSchema = makeSchema();
