import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateWithoutServiceInputObjectSchema } from './TenantCreateWithoutServiceInput.schema';
import { TenantUncheckedCreateWithoutServiceInputObjectSchema } from './TenantUncheckedCreateWithoutServiceInput.schema';
import { TenantCreateOrConnectWithoutServiceInputObjectSchema } from './TenantCreateOrConnectWithoutServiceInput.schema';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantCreateWithoutServiceInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutServiceInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutServiceInputObjectSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional()
}).strict();
export const TenantCreateNestedOneWithoutServiceInputObjectSchema: z.ZodType<Prisma.TenantCreateNestedOneWithoutServiceInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateNestedOneWithoutServiceInput>;
export const TenantCreateNestedOneWithoutServiceInputObjectZodSchema = makeSchema();
