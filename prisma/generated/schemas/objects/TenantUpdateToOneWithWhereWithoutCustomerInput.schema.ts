import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema';
import { TenantUpdateWithoutCustomerInputObjectSchema } from './TenantUpdateWithoutCustomerInput.schema';
import { TenantUncheckedUpdateWithoutCustomerInputObjectSchema } from './TenantUncheckedUpdateWithoutCustomerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TenantUpdateWithoutCustomerInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutCustomerInputObjectSchema)])
}).strict();
export const TenantUpdateToOneWithWhereWithoutCustomerInputObjectSchema: z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutCustomerInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutCustomerInput>;
export const TenantUpdateToOneWithWhereWithoutCustomerInputObjectZodSchema = makeSchema();
