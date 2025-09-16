import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCreateWithoutTenantInputObjectSchema } from './DoctorCreateWithoutTenantInput.schema';
import { DoctorUncheckedCreateWithoutTenantInputObjectSchema } from './DoctorUncheckedCreateWithoutTenantInput.schema';
import { DoctorCreateOrConnectWithoutTenantInputObjectSchema } from './DoctorCreateOrConnectWithoutTenantInput.schema';
import { DoctorCreateManyTenantInputEnvelopeObjectSchema } from './DoctorCreateManyTenantInputEnvelope.schema';
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorCreateWithoutTenantInputObjectSchema), z.lazy(() => DoctorCreateWithoutTenantInputObjectSchema).array(), z.lazy(() => DoctorUncheckedCreateWithoutTenantInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutTenantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => DoctorCreateOrConnectWithoutTenantInputObjectSchema), z.lazy(() => DoctorCreateOrConnectWithoutTenantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => DoctorCreateManyTenantInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => DoctorWhereUniqueInputObjectSchema), z.lazy(() => DoctorWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const DoctorUncheckedCreateNestedManyWithoutTenantInputObjectSchema: z.ZodType<Prisma.DoctorUncheckedCreateNestedManyWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUncheckedCreateNestedManyWithoutTenantInput>;
export const DoctorUncheckedCreateNestedManyWithoutTenantInputObjectZodSchema = makeSchema();
