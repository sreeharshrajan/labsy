import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantAddressWhereUniqueInputObjectSchema } from './TenantAddressWhereUniqueInput.schema';
import { TenantAddressCreateWithoutTenantInputObjectSchema } from './TenantAddressCreateWithoutTenantInput.schema';
import { TenantAddressUncheckedCreateWithoutTenantInputObjectSchema } from './TenantAddressUncheckedCreateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantAddressWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantAddressCreateWithoutTenantInputObjectSchema), z.lazy(() => TenantAddressUncheckedCreateWithoutTenantInputObjectSchema)])
}).strict();
export const TenantAddressCreateOrConnectWithoutTenantInputObjectSchema: z.ZodType<Prisma.TenantAddressCreateOrConnectWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantAddressCreateOrConnectWithoutTenantInput>;
export const TenantAddressCreateOrConnectWithoutTenantInputObjectZodSchema = makeSchema();
