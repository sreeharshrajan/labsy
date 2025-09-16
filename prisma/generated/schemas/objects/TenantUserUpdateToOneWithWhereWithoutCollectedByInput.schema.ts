import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserWhereInputObjectSchema } from './TenantUserWhereInput.schema';
import { TenantUserUpdateWithoutCollectedByInputObjectSchema } from './TenantUserUpdateWithoutCollectedByInput.schema';
import { TenantUserUncheckedUpdateWithoutCollectedByInputObjectSchema } from './TenantUserUncheckedUpdateWithoutCollectedByInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantUserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TenantUserUpdateWithoutCollectedByInputObjectSchema), z.lazy(() => TenantUserUncheckedUpdateWithoutCollectedByInputObjectSchema)])
}).strict();
export const TenantUserUpdateToOneWithWhereWithoutCollectedByInputObjectSchema: z.ZodType<Prisma.TenantUserUpdateToOneWithWhereWithoutCollectedByInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserUpdateToOneWithWhereWithoutCollectedByInput>;
export const TenantUserUpdateToOneWithWhereWithoutCollectedByInputObjectZodSchema = makeSchema();
