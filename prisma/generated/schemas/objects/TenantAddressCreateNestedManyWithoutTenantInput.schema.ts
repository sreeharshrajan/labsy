import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantAddressCreateWithoutTenantInputObjectSchema } from './TenantAddressCreateWithoutTenantInput.schema';
import { TenantAddressUncheckedCreateWithoutTenantInputObjectSchema } from './TenantAddressUncheckedCreateWithoutTenantInput.schema';
import { TenantAddressCreateOrConnectWithoutTenantInputObjectSchema } from './TenantAddressCreateOrConnectWithoutTenantInput.schema';
import { TenantAddressCreateManyTenantInputEnvelopeObjectSchema } from './TenantAddressCreateManyTenantInputEnvelope.schema';
import { TenantAddressWhereUniqueInputObjectSchema } from './TenantAddressWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantAddressCreateWithoutTenantInputObjectSchema), z.lazy(() => TenantAddressCreateWithoutTenantInputObjectSchema).array(), z.lazy(() => TenantAddressUncheckedCreateWithoutTenantInputObjectSchema), z.lazy(() => TenantAddressUncheckedCreateWithoutTenantInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TenantAddressCreateOrConnectWithoutTenantInputObjectSchema), z.lazy(() => TenantAddressCreateOrConnectWithoutTenantInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TenantAddressCreateManyTenantInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TenantAddressWhereUniqueInputObjectSchema), z.lazy(() => TenantAddressWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TenantAddressCreateNestedManyWithoutTenantInputObjectSchema: z.ZodType<Prisma.TenantAddressCreateNestedManyWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantAddressCreateNestedManyWithoutTenantInput>;
export const TenantAddressCreateNestedManyWithoutTenantInputObjectZodSchema = makeSchema();
