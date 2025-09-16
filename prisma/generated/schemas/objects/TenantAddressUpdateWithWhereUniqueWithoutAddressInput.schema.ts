import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantAddressWhereUniqueInputObjectSchema } from './TenantAddressWhereUniqueInput.schema';
import { TenantAddressUpdateWithoutAddressInputObjectSchema } from './TenantAddressUpdateWithoutAddressInput.schema';
import { TenantAddressUncheckedUpdateWithoutAddressInputObjectSchema } from './TenantAddressUncheckedUpdateWithoutAddressInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantAddressWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TenantAddressUpdateWithoutAddressInputObjectSchema), z.lazy(() => TenantAddressUncheckedUpdateWithoutAddressInputObjectSchema)])
}).strict();
export const TenantAddressUpdateWithWhereUniqueWithoutAddressInputObjectSchema: z.ZodType<Prisma.TenantAddressUpdateWithWhereUniqueWithoutAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantAddressUpdateWithWhereUniqueWithoutAddressInput>;
export const TenantAddressUpdateWithWhereUniqueWithoutAddressInputObjectZodSchema = makeSchema();
