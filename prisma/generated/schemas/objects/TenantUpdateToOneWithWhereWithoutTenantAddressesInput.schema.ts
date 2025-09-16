import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema';
import { TenantUpdateWithoutTenantAddressesInputObjectSchema } from './TenantUpdateWithoutTenantAddressesInput.schema';
import { TenantUncheckedUpdateWithoutTenantAddressesInputObjectSchema } from './TenantUncheckedUpdateWithoutTenantAddressesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TenantUpdateWithoutTenantAddressesInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutTenantAddressesInputObjectSchema)])
}).strict();
export const TenantUpdateToOneWithWhereWithoutTenantAddressesInputObjectSchema: z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutTenantAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutTenantAddressesInput>;
export const TenantUpdateToOneWithWhereWithoutTenantAddressesInputObjectZodSchema = makeSchema();
