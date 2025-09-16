import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantAddressScalarWhereInputObjectSchema } from './TenantAddressScalarWhereInput.schema';
import { TenantAddressUpdateManyMutationInputObjectSchema } from './TenantAddressUpdateManyMutationInput.schema';
import { TenantAddressUncheckedUpdateManyWithoutTenantInputObjectSchema } from './TenantAddressUncheckedUpdateManyWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantAddressScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TenantAddressUpdateManyMutationInputObjectSchema), z.lazy(() => TenantAddressUncheckedUpdateManyWithoutTenantInputObjectSchema)])
}).strict();
export const TenantAddressUpdateManyWithWhereWithoutTenantInputObjectSchema: z.ZodType<Prisma.TenantAddressUpdateManyWithWhereWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantAddressUpdateManyWithWhereWithoutTenantInput>;
export const TenantAddressUpdateManyWithWhereWithoutTenantInputObjectZodSchema = makeSchema();
