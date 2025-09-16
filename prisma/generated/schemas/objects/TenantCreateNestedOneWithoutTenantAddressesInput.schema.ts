import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateWithoutTenantAddressesInputObjectSchema } from './TenantCreateWithoutTenantAddressesInput.schema';
import { TenantUncheckedCreateWithoutTenantAddressesInputObjectSchema } from './TenantUncheckedCreateWithoutTenantAddressesInput.schema';
import { TenantCreateOrConnectWithoutTenantAddressesInputObjectSchema } from './TenantCreateOrConnectWithoutTenantAddressesInput.schema';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantCreateWithoutTenantAddressesInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutTenantAddressesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutTenantAddressesInputObjectSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional()
}).strict();
export const TenantCreateNestedOneWithoutTenantAddressesInputObjectSchema: z.ZodType<Prisma.TenantCreateNestedOneWithoutTenantAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateNestedOneWithoutTenantAddressesInput>;
export const TenantCreateNestedOneWithoutTenantAddressesInputObjectZodSchema = makeSchema();
