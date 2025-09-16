import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserUpdateWithoutReportInputObjectSchema } from './TenantUserUpdateWithoutReportInput.schema';
import { TenantUserUncheckedUpdateWithoutReportInputObjectSchema } from './TenantUserUncheckedUpdateWithoutReportInput.schema';
import { TenantUserCreateWithoutReportInputObjectSchema } from './TenantUserCreateWithoutReportInput.schema';
import { TenantUserUncheckedCreateWithoutReportInputObjectSchema } from './TenantUserUncheckedCreateWithoutReportInput.schema';
import { TenantUserWhereInputObjectSchema } from './TenantUserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TenantUserUpdateWithoutReportInputObjectSchema), z.lazy(() => TenantUserUncheckedUpdateWithoutReportInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantUserCreateWithoutReportInputObjectSchema), z.lazy(() => TenantUserUncheckedCreateWithoutReportInputObjectSchema)]),
  where: z.lazy(() => TenantUserWhereInputObjectSchema).optional()
}).strict();
export const TenantUserUpsertWithoutReportInputObjectSchema: z.ZodType<Prisma.TenantUserUpsertWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserUpsertWithoutReportInput>;
export const TenantUserUpsertWithoutReportInputObjectZodSchema = makeSchema();
