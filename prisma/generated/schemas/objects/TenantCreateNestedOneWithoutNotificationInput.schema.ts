import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateWithoutNotificationInputObjectSchema } from './TenantCreateWithoutNotificationInput.schema';
import { TenantUncheckedCreateWithoutNotificationInputObjectSchema } from './TenantUncheckedCreateWithoutNotificationInput.schema';
import { TenantCreateOrConnectWithoutNotificationInputObjectSchema } from './TenantCreateOrConnectWithoutNotificationInput.schema';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantCreateWithoutNotificationInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutNotificationInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutNotificationInputObjectSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional()
}).strict();
export const TenantCreateNestedOneWithoutNotificationInputObjectSchema: z.ZodType<Prisma.TenantCreateNestedOneWithoutNotificationInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateNestedOneWithoutNotificationInput>;
export const TenantCreateNestedOneWithoutNotificationInputObjectZodSchema = makeSchema();
