import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantCreateWithoutSubscriptionsInputObjectSchema } from './TenantCreateWithoutSubscriptionsInput.schema';
import { TenantUncheckedCreateWithoutSubscriptionsInputObjectSchema } from './TenantUncheckedCreateWithoutSubscriptionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantCreateWithoutSubscriptionsInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutSubscriptionsInputObjectSchema)])
}).strict();
export const TenantCreateOrConnectWithoutSubscriptionsInputObjectSchema: z.ZodType<Prisma.TenantCreateOrConnectWithoutSubscriptionsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateOrConnectWithoutSubscriptionsInput>;
export const TenantCreateOrConnectWithoutSubscriptionsInputObjectZodSchema = makeSchema();
