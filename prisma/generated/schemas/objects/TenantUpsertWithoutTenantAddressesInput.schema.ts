import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUpdateWithoutTenantAddressesInputObjectSchema } from './TenantUpdateWithoutTenantAddressesInput.schema';
import { TenantUncheckedUpdateWithoutTenantAddressesInputObjectSchema } from './TenantUncheckedUpdateWithoutTenantAddressesInput.schema';
import { TenantCreateWithoutTenantAddressesInputObjectSchema } from './TenantCreateWithoutTenantAddressesInput.schema';
import { TenantUncheckedCreateWithoutTenantAddressesInputObjectSchema } from './TenantUncheckedCreateWithoutTenantAddressesInput.schema';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TenantUpdateWithoutTenantAddressesInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutTenantAddressesInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantCreateWithoutTenantAddressesInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutTenantAddressesInputObjectSchema)]),
  where: z.lazy(() => TenantWhereInputObjectSchema).optional()
}).strict();
export const TenantUpsertWithoutTenantAddressesInputObjectSchema: z.ZodType<Prisma.TenantUpsertWithoutTenantAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpsertWithoutTenantAddressesInput>;
export const TenantUpsertWithoutTenantAddressesInputObjectZodSchema = makeSchema();
