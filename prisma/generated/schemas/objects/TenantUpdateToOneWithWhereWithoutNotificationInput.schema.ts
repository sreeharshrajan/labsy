import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema';
import { TenantUpdateWithoutNotificationInputObjectSchema } from './TenantUpdateWithoutNotificationInput.schema';
import { TenantUncheckedUpdateWithoutNotificationInputObjectSchema } from './TenantUncheckedUpdateWithoutNotificationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TenantUpdateWithoutNotificationInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutNotificationInputObjectSchema)])
}).strict();
export const TenantUpdateToOneWithWhereWithoutNotificationInputObjectSchema: z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutNotificationInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutNotificationInput>;
export const TenantUpdateToOneWithWhereWithoutNotificationInputObjectZodSchema = makeSchema();
