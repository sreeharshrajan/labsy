import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateWithoutNotificationInputObjectSchema } from './TenantCreateWithoutNotificationInput.schema';
import { TenantUncheckedCreateWithoutNotificationInputObjectSchema } from './TenantUncheckedCreateWithoutNotificationInput.schema';
import { TenantCreateOrConnectWithoutNotificationInputObjectSchema } from './TenantCreateOrConnectWithoutNotificationInput.schema';
import { TenantUpsertWithoutNotificationInputObjectSchema } from './TenantUpsertWithoutNotificationInput.schema';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantUpdateToOneWithWhereWithoutNotificationInputObjectSchema } from './TenantUpdateToOneWithWhereWithoutNotificationInput.schema';
import { TenantUpdateWithoutNotificationInputObjectSchema } from './TenantUpdateWithoutNotificationInput.schema';
import { TenantUncheckedUpdateWithoutNotificationInputObjectSchema } from './TenantUncheckedUpdateWithoutNotificationInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantCreateWithoutNotificationInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutNotificationInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutNotificationInputObjectSchema).optional(),
  upsert: z.lazy(() => TenantUpsertWithoutNotificationInputObjectSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TenantUpdateToOneWithWhereWithoutNotificationInputObjectSchema), z.lazy(() => TenantUpdateWithoutNotificationInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutNotificationInputObjectSchema)]).optional()
}).strict();
export const TenantUpdateOneRequiredWithoutNotificationNestedInputObjectSchema: z.ZodType<Prisma.TenantUpdateOneRequiredWithoutNotificationNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpdateOneRequiredWithoutNotificationNestedInput>;
export const TenantUpdateOneRequiredWithoutNotificationNestedInputObjectZodSchema = makeSchema();
