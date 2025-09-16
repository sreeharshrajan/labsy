import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantCreateWithoutCustomerInputObjectSchema } from './TenantCreateWithoutCustomerInput.schema';
import { TenantUncheckedCreateWithoutCustomerInputObjectSchema } from './TenantUncheckedCreateWithoutCustomerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantCreateWithoutCustomerInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutCustomerInputObjectSchema)])
}).strict();
export const TenantCreateOrConnectWithoutCustomerInputObjectSchema: z.ZodType<Prisma.TenantCreateOrConnectWithoutCustomerInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateOrConnectWithoutCustomerInput>;
export const TenantCreateOrConnectWithoutCustomerInputObjectZodSchema = makeSchema();
