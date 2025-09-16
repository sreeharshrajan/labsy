import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantCreateWithoutServiceInputObjectSchema } from './TenantCreateWithoutServiceInput.schema';
import { TenantUncheckedCreateWithoutServiceInputObjectSchema } from './TenantUncheckedCreateWithoutServiceInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantCreateWithoutServiceInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutServiceInputObjectSchema)])
}).strict();
export const TenantCreateOrConnectWithoutServiceInputObjectSchema: z.ZodType<Prisma.TenantCreateOrConnectWithoutServiceInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateOrConnectWithoutServiceInput>;
export const TenantCreateOrConnectWithoutServiceInputObjectZodSchema = makeSchema();
