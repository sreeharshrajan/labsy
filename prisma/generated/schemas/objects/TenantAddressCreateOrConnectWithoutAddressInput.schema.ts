import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantAddressWhereUniqueInputObjectSchema } from './TenantAddressWhereUniqueInput.schema';
import { TenantAddressCreateWithoutAddressInputObjectSchema } from './TenantAddressCreateWithoutAddressInput.schema';
import { TenantAddressUncheckedCreateWithoutAddressInputObjectSchema } from './TenantAddressUncheckedCreateWithoutAddressInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantAddressWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantAddressCreateWithoutAddressInputObjectSchema), z.lazy(() => TenantAddressUncheckedCreateWithoutAddressInputObjectSchema)])
}).strict();
export const TenantAddressCreateOrConnectWithoutAddressInputObjectSchema: z.ZodType<Prisma.TenantAddressCreateOrConnectWithoutAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantAddressCreateOrConnectWithoutAddressInput>;
export const TenantAddressCreateOrConnectWithoutAddressInputObjectZodSchema = makeSchema();
