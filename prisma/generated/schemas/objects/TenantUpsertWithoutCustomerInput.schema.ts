import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUpdateWithoutCustomerInputObjectSchema } from './TenantUpdateWithoutCustomerInput.schema';
import { TenantUncheckedUpdateWithoutCustomerInputObjectSchema } from './TenantUncheckedUpdateWithoutCustomerInput.schema';
import { TenantCreateWithoutCustomerInputObjectSchema } from './TenantCreateWithoutCustomerInput.schema';
import { TenantUncheckedCreateWithoutCustomerInputObjectSchema } from './TenantUncheckedCreateWithoutCustomerInput.schema';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TenantUpdateWithoutCustomerInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutCustomerInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantCreateWithoutCustomerInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutCustomerInputObjectSchema)]),
  where: z.lazy(() => TenantWhereInputObjectSchema).optional()
}).strict();
export const TenantUpsertWithoutCustomerInputObjectSchema: z.ZodType<Prisma.TenantUpsertWithoutCustomerInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpsertWithoutCustomerInput>;
export const TenantUpsertWithoutCustomerInputObjectZodSchema = makeSchema();
