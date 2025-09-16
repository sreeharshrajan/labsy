import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUpdateWithoutRolesInputObjectSchema } from './TenantUpdateWithoutRolesInput.schema';
import { TenantUncheckedUpdateWithoutRolesInputObjectSchema } from './TenantUncheckedUpdateWithoutRolesInput.schema';
import { TenantCreateWithoutRolesInputObjectSchema } from './TenantCreateWithoutRolesInput.schema';
import { TenantUncheckedCreateWithoutRolesInputObjectSchema } from './TenantUncheckedCreateWithoutRolesInput.schema';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TenantUpdateWithoutRolesInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutRolesInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantCreateWithoutRolesInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutRolesInputObjectSchema)]),
  where: z.lazy(() => TenantWhereInputObjectSchema).optional()
}).strict();
export const TenantUpsertWithoutRolesInputObjectSchema: z.ZodType<Prisma.TenantUpsertWithoutRolesInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpsertWithoutRolesInput>;
export const TenantUpsertWithoutRolesInputObjectZodSchema = makeSchema();
