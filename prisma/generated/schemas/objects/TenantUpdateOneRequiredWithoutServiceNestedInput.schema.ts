import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateWithoutServiceInputObjectSchema } from './TenantCreateWithoutServiceInput.schema';
import { TenantUncheckedCreateWithoutServiceInputObjectSchema } from './TenantUncheckedCreateWithoutServiceInput.schema';
import { TenantCreateOrConnectWithoutServiceInputObjectSchema } from './TenantCreateOrConnectWithoutServiceInput.schema';
import { TenantUpsertWithoutServiceInputObjectSchema } from './TenantUpsertWithoutServiceInput.schema';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantUpdateToOneWithWhereWithoutServiceInputObjectSchema } from './TenantUpdateToOneWithWhereWithoutServiceInput.schema';
import { TenantUpdateWithoutServiceInputObjectSchema } from './TenantUpdateWithoutServiceInput.schema';
import { TenantUncheckedUpdateWithoutServiceInputObjectSchema } from './TenantUncheckedUpdateWithoutServiceInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantCreateWithoutServiceInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutServiceInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutServiceInputObjectSchema).optional(),
  upsert: z.lazy(() => TenantUpsertWithoutServiceInputObjectSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TenantUpdateToOneWithWhereWithoutServiceInputObjectSchema), z.lazy(() => TenantUpdateWithoutServiceInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutServiceInputObjectSchema)]).optional()
}).strict();
export const TenantUpdateOneRequiredWithoutServiceNestedInputObjectSchema: z.ZodType<Prisma.TenantUpdateOneRequiredWithoutServiceNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpdateOneRequiredWithoutServiceNestedInput>;
export const TenantUpdateOneRequiredWithoutServiceNestedInputObjectZodSchema = makeSchema();
