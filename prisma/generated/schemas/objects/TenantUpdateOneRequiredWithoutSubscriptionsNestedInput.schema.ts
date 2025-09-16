import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateWithoutSubscriptionsInputObjectSchema } from './TenantCreateWithoutSubscriptionsInput.schema';
import { TenantUncheckedCreateWithoutSubscriptionsInputObjectSchema } from './TenantUncheckedCreateWithoutSubscriptionsInput.schema';
import { TenantCreateOrConnectWithoutSubscriptionsInputObjectSchema } from './TenantCreateOrConnectWithoutSubscriptionsInput.schema';
import { TenantUpsertWithoutSubscriptionsInputObjectSchema } from './TenantUpsertWithoutSubscriptionsInput.schema';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantUpdateToOneWithWhereWithoutSubscriptionsInputObjectSchema } from './TenantUpdateToOneWithWhereWithoutSubscriptionsInput.schema';
import { TenantUpdateWithoutSubscriptionsInputObjectSchema } from './TenantUpdateWithoutSubscriptionsInput.schema';
import { TenantUncheckedUpdateWithoutSubscriptionsInputObjectSchema } from './TenantUncheckedUpdateWithoutSubscriptionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantCreateWithoutSubscriptionsInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutSubscriptionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutSubscriptionsInputObjectSchema).optional(),
  upsert: z.lazy(() => TenantUpsertWithoutSubscriptionsInputObjectSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TenantUpdateToOneWithWhereWithoutSubscriptionsInputObjectSchema), z.lazy(() => TenantUpdateWithoutSubscriptionsInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutSubscriptionsInputObjectSchema)]).optional()
}).strict();
export const TenantUpdateOneRequiredWithoutSubscriptionsNestedInputObjectSchema: z.ZodType<Prisma.TenantUpdateOneRequiredWithoutSubscriptionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpdateOneRequiredWithoutSubscriptionsNestedInput>;
export const TenantUpdateOneRequiredWithoutSubscriptionsNestedInputObjectZodSchema = makeSchema();
