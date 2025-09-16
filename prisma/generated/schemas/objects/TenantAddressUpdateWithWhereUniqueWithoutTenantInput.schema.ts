import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantAddressWhereUniqueInputObjectSchema } from './TenantAddressWhereUniqueInput.schema';
import { TenantAddressUpdateWithoutTenantInputObjectSchema } from './TenantAddressUpdateWithoutTenantInput.schema';
import { TenantAddressUncheckedUpdateWithoutTenantInputObjectSchema } from './TenantAddressUncheckedUpdateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantAddressWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TenantAddressUpdateWithoutTenantInputObjectSchema), z.lazy(() => TenantAddressUncheckedUpdateWithoutTenantInputObjectSchema)])
}).strict();
export const TenantAddressUpdateWithWhereUniqueWithoutTenantInputObjectSchema: z.ZodType<Prisma.TenantAddressUpdateWithWhereUniqueWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantAddressUpdateWithWhereUniqueWithoutTenantInput>;
export const TenantAddressUpdateWithWhereUniqueWithoutTenantInputObjectZodSchema = makeSchema();
