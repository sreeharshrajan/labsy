import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema';
import { TenantUpdateWithoutServiceInputObjectSchema } from './TenantUpdateWithoutServiceInput.schema';
import { TenantUncheckedUpdateWithoutServiceInputObjectSchema } from './TenantUncheckedUpdateWithoutServiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TenantUpdateWithoutServiceInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutServiceInputObjectSchema)])
}).strict();
export const TenantUpdateToOneWithWhereWithoutServiceInputObjectSchema: z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutServiceInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutServiceInput>;
export const TenantUpdateToOneWithWhereWithoutServiceInputObjectZodSchema = makeSchema();
