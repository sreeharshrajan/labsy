import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantCreateWithoutTenantAddressesInputObjectSchema } from './TenantCreateWithoutTenantAddressesInput.schema';
import { TenantUncheckedCreateWithoutTenantAddressesInputObjectSchema } from './TenantUncheckedCreateWithoutTenantAddressesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantCreateWithoutTenantAddressesInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutTenantAddressesInputObjectSchema)])
}).strict();
export const TenantCreateOrConnectWithoutTenantAddressesInputObjectSchema: z.ZodType<Prisma.TenantCreateOrConnectWithoutTenantAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateOrConnectWithoutTenantAddressesInput>;
export const TenantCreateOrConnectWithoutTenantAddressesInputObjectZodSchema = makeSchema();
