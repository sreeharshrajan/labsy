import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateWithoutSubscriptionsInputObjectSchema } from './TenantCreateWithoutSubscriptionsInput.schema';
import { TenantUncheckedCreateWithoutSubscriptionsInputObjectSchema } from './TenantUncheckedCreateWithoutSubscriptionsInput.schema';
import { TenantCreateOrConnectWithoutSubscriptionsInputObjectSchema } from './TenantCreateOrConnectWithoutSubscriptionsInput.schema';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantCreateWithoutSubscriptionsInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutSubscriptionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutSubscriptionsInputObjectSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional()
}).strict();
export const TenantCreateNestedOneWithoutSubscriptionsInputObjectSchema: z.ZodType<Prisma.TenantCreateNestedOneWithoutSubscriptionsInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateNestedOneWithoutSubscriptionsInput>;
export const TenantCreateNestedOneWithoutSubscriptionsInputObjectZodSchema = makeSchema();
