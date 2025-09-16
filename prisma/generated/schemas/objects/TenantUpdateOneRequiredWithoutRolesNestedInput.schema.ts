import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateWithoutRolesInputObjectSchema } from './TenantCreateWithoutRolesInput.schema';
import { TenantUncheckedCreateWithoutRolesInputObjectSchema } from './TenantUncheckedCreateWithoutRolesInput.schema';
import { TenantCreateOrConnectWithoutRolesInputObjectSchema } from './TenantCreateOrConnectWithoutRolesInput.schema';
import { TenantUpsertWithoutRolesInputObjectSchema } from './TenantUpsertWithoutRolesInput.schema';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantUpdateToOneWithWhereWithoutRolesInputObjectSchema } from './TenantUpdateToOneWithWhereWithoutRolesInput.schema';
import { TenantUpdateWithoutRolesInputObjectSchema } from './TenantUpdateWithoutRolesInput.schema';
import { TenantUncheckedUpdateWithoutRolesInputObjectSchema } from './TenantUncheckedUpdateWithoutRolesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantCreateWithoutRolesInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutRolesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutRolesInputObjectSchema).optional(),
  upsert: z.lazy(() => TenantUpsertWithoutRolesInputObjectSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TenantUpdateToOneWithWhereWithoutRolesInputObjectSchema), z.lazy(() => TenantUpdateWithoutRolesInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutRolesInputObjectSchema)]).optional()
}).strict();
export const TenantUpdateOneRequiredWithoutRolesNestedInputObjectSchema: z.ZodType<Prisma.TenantUpdateOneRequiredWithoutRolesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpdateOneRequiredWithoutRolesNestedInput>;
export const TenantUpdateOneRequiredWithoutRolesNestedInputObjectZodSchema = makeSchema();
