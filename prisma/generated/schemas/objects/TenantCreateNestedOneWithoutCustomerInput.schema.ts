import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateWithoutCustomerInputObjectSchema } from './TenantCreateWithoutCustomerInput.schema';
import { TenantUncheckedCreateWithoutCustomerInputObjectSchema } from './TenantUncheckedCreateWithoutCustomerInput.schema';
import { TenantCreateOrConnectWithoutCustomerInputObjectSchema } from './TenantCreateOrConnectWithoutCustomerInput.schema';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantCreateWithoutCustomerInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutCustomerInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutCustomerInputObjectSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional()
}).strict();
export const TenantCreateNestedOneWithoutCustomerInputObjectSchema: z.ZodType<Prisma.TenantCreateNestedOneWithoutCustomerInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateNestedOneWithoutCustomerInput>;
export const TenantCreateNestedOneWithoutCustomerInputObjectZodSchema = makeSchema();
