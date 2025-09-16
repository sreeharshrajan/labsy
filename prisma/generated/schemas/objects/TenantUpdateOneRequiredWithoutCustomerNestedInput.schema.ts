import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateWithoutCustomerInputObjectSchema } from './TenantCreateWithoutCustomerInput.schema';
import { TenantUncheckedCreateWithoutCustomerInputObjectSchema } from './TenantUncheckedCreateWithoutCustomerInput.schema';
import { TenantCreateOrConnectWithoutCustomerInputObjectSchema } from './TenantCreateOrConnectWithoutCustomerInput.schema';
import { TenantUpsertWithoutCustomerInputObjectSchema } from './TenantUpsertWithoutCustomerInput.schema';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantUpdateToOneWithWhereWithoutCustomerInputObjectSchema } from './TenantUpdateToOneWithWhereWithoutCustomerInput.schema';
import { TenantUpdateWithoutCustomerInputObjectSchema } from './TenantUpdateWithoutCustomerInput.schema';
import { TenantUncheckedUpdateWithoutCustomerInputObjectSchema } from './TenantUncheckedUpdateWithoutCustomerInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantCreateWithoutCustomerInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutCustomerInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutCustomerInputObjectSchema).optional(),
  upsert: z.lazy(() => TenantUpsertWithoutCustomerInputObjectSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TenantUpdateToOneWithWhereWithoutCustomerInputObjectSchema), z.lazy(() => TenantUpdateWithoutCustomerInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutCustomerInputObjectSchema)]).optional()
}).strict();
export const TenantUpdateOneRequiredWithoutCustomerNestedInputObjectSchema: z.ZodType<Prisma.TenantUpdateOneRequiredWithoutCustomerNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpdateOneRequiredWithoutCustomerNestedInput>;
export const TenantUpdateOneRequiredWithoutCustomerNestedInputObjectZodSchema = makeSchema();
