import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantCreateWithoutRolesInputObjectSchema } from './TenantCreateWithoutRolesInput.schema';
import { TenantUncheckedCreateWithoutRolesInputObjectSchema } from './TenantUncheckedCreateWithoutRolesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantCreateWithoutRolesInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutRolesInputObjectSchema)])
}).strict();
export const TenantCreateOrConnectWithoutRolesInputObjectSchema: z.ZodType<Prisma.TenantCreateOrConnectWithoutRolesInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantCreateOrConnectWithoutRolesInput>;
export const TenantCreateOrConnectWithoutRolesInputObjectZodSchema = makeSchema();
