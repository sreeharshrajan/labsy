import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema';
import { TenantUpdateWithoutSubscriptionsInputObjectSchema } from './TenantUpdateWithoutSubscriptionsInput.schema';
import { TenantUncheckedUpdateWithoutSubscriptionsInputObjectSchema } from './TenantUncheckedUpdateWithoutSubscriptionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TenantUpdateWithoutSubscriptionsInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutSubscriptionsInputObjectSchema)])
}).strict();
export const TenantUpdateToOneWithWhereWithoutSubscriptionsInputObjectSchema: z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutSubscriptionsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutSubscriptionsInput>;
export const TenantUpdateToOneWithWhereWithoutSubscriptionsInputObjectZodSchema = makeSchema();
