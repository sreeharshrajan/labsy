import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantAddressScalarWhereInputObjectSchema } from './TenantAddressScalarWhereInput.schema';
import { TenantAddressUpdateManyMutationInputObjectSchema } from './TenantAddressUpdateManyMutationInput.schema';
import { TenantAddressUncheckedUpdateManyWithoutAddressInputObjectSchema } from './TenantAddressUncheckedUpdateManyWithoutAddressInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantAddressScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TenantAddressUpdateManyMutationInputObjectSchema), z.lazy(() => TenantAddressUncheckedUpdateManyWithoutAddressInputObjectSchema)])
}).strict();
export const TenantAddressUpdateManyWithWhereWithoutAddressInputObjectSchema: z.ZodType<Prisma.TenantAddressUpdateManyWithWhereWithoutAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantAddressUpdateManyWithWhereWithoutAddressInput>;
export const TenantAddressUpdateManyWithWhereWithoutAddressInputObjectZodSchema = makeSchema();
