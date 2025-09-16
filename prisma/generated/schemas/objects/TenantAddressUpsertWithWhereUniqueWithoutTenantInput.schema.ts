import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantAddressWhereUniqueInputObjectSchema } from './TenantAddressWhereUniqueInput.schema';
import { TenantAddressUpdateWithoutTenantInputObjectSchema } from './TenantAddressUpdateWithoutTenantInput.schema';
import { TenantAddressUncheckedUpdateWithoutTenantInputObjectSchema } from './TenantAddressUncheckedUpdateWithoutTenantInput.schema';
import { TenantAddressCreateWithoutTenantInputObjectSchema } from './TenantAddressCreateWithoutTenantInput.schema';
import { TenantAddressUncheckedCreateWithoutTenantInputObjectSchema } from './TenantAddressUncheckedCreateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantAddressWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TenantAddressUpdateWithoutTenantInputObjectSchema), z.lazy(() => TenantAddressUncheckedUpdateWithoutTenantInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantAddressCreateWithoutTenantInputObjectSchema), z.lazy(() => TenantAddressUncheckedCreateWithoutTenantInputObjectSchema)])
}).strict();
export const TenantAddressUpsertWithWhereUniqueWithoutTenantInputObjectSchema: z.ZodType<Prisma.TenantAddressUpsertWithWhereUniqueWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantAddressUpsertWithWhereUniqueWithoutTenantInput>;
export const TenantAddressUpsertWithWhereUniqueWithoutTenantInputObjectZodSchema = makeSchema();
