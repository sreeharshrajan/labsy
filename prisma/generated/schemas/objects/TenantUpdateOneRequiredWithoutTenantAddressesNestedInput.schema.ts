import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateWithoutTenantAddressesInputObjectSchema } from './TenantCreateWithoutTenantAddressesInput.schema';
import { TenantUncheckedCreateWithoutTenantAddressesInputObjectSchema } from './TenantUncheckedCreateWithoutTenantAddressesInput.schema';
import { TenantCreateOrConnectWithoutTenantAddressesInputObjectSchema } from './TenantCreateOrConnectWithoutTenantAddressesInput.schema';
import { TenantUpsertWithoutTenantAddressesInputObjectSchema } from './TenantUpsertWithoutTenantAddressesInput.schema';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantUpdateToOneWithWhereWithoutTenantAddressesInputObjectSchema } from './TenantUpdateToOneWithWhereWithoutTenantAddressesInput.schema';
import { TenantUpdateWithoutTenantAddressesInputObjectSchema } from './TenantUpdateWithoutTenantAddressesInput.schema';
import { TenantUncheckedUpdateWithoutTenantAddressesInputObjectSchema } from './TenantUncheckedUpdateWithoutTenantAddressesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantCreateWithoutTenantAddressesInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutTenantAddressesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutTenantAddressesInputObjectSchema).optional(),
  upsert: z.lazy(() => TenantUpsertWithoutTenantAddressesInputObjectSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TenantUpdateToOneWithWhereWithoutTenantAddressesInputObjectSchema), z.lazy(() => TenantUpdateWithoutTenantAddressesInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutTenantAddressesInputObjectSchema)]).optional()
}).strict();
export const TenantUpdateOneRequiredWithoutTenantAddressesNestedInputObjectSchema: z.ZodType<Prisma.TenantUpdateOneRequiredWithoutTenantAddressesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpdateOneRequiredWithoutTenantAddressesNestedInput>;
export const TenantUpdateOneRequiredWithoutTenantAddressesNestedInputObjectZodSchema = makeSchema();
