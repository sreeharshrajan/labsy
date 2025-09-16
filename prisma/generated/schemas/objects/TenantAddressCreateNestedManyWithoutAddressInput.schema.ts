import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantAddressCreateWithoutAddressInputObjectSchema } from './TenantAddressCreateWithoutAddressInput.schema';
import { TenantAddressUncheckedCreateWithoutAddressInputObjectSchema } from './TenantAddressUncheckedCreateWithoutAddressInput.schema';
import { TenantAddressCreateOrConnectWithoutAddressInputObjectSchema } from './TenantAddressCreateOrConnectWithoutAddressInput.schema';
import { TenantAddressCreateManyAddressInputEnvelopeObjectSchema } from './TenantAddressCreateManyAddressInputEnvelope.schema';
import { TenantAddressWhereUniqueInputObjectSchema } from './TenantAddressWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantAddressCreateWithoutAddressInputObjectSchema), z.lazy(() => TenantAddressCreateWithoutAddressInputObjectSchema).array(), z.lazy(() => TenantAddressUncheckedCreateWithoutAddressInputObjectSchema), z.lazy(() => TenantAddressUncheckedCreateWithoutAddressInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TenantAddressCreateOrConnectWithoutAddressInputObjectSchema), z.lazy(() => TenantAddressCreateOrConnectWithoutAddressInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TenantAddressCreateManyAddressInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TenantAddressWhereUniqueInputObjectSchema), z.lazy(() => TenantAddressWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TenantAddressCreateNestedManyWithoutAddressInputObjectSchema: z.ZodType<Prisma.TenantAddressCreateNestedManyWithoutAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantAddressCreateNestedManyWithoutAddressInput>;
export const TenantAddressCreateNestedManyWithoutAddressInputObjectZodSchema = makeSchema();
