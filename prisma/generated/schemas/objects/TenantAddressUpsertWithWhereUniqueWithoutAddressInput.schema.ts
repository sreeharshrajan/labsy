import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantAddressWhereUniqueInputObjectSchema } from './TenantAddressWhereUniqueInput.schema';
import { TenantAddressUpdateWithoutAddressInputObjectSchema } from './TenantAddressUpdateWithoutAddressInput.schema';
import { TenantAddressUncheckedUpdateWithoutAddressInputObjectSchema } from './TenantAddressUncheckedUpdateWithoutAddressInput.schema';
import { TenantAddressCreateWithoutAddressInputObjectSchema } from './TenantAddressCreateWithoutAddressInput.schema';
import { TenantAddressUncheckedCreateWithoutAddressInputObjectSchema } from './TenantAddressUncheckedCreateWithoutAddressInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantAddressWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TenantAddressUpdateWithoutAddressInputObjectSchema), z.lazy(() => TenantAddressUncheckedUpdateWithoutAddressInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantAddressCreateWithoutAddressInputObjectSchema), z.lazy(() => TenantAddressUncheckedCreateWithoutAddressInputObjectSchema)])
}).strict();
export const TenantAddressUpsertWithWhereUniqueWithoutAddressInputObjectSchema: z.ZodType<Prisma.TenantAddressUpsertWithWhereUniqueWithoutAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantAddressUpsertWithWhereUniqueWithoutAddressInput>;
export const TenantAddressUpsertWithWhereUniqueWithoutAddressInputObjectZodSchema = makeSchema();
