import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserWhereInputObjectSchema } from './TenantUserWhereInput.schema';
import { TenantUserUpdateWithoutReportInputObjectSchema } from './TenantUserUpdateWithoutReportInput.schema';
import { TenantUserUncheckedUpdateWithoutReportInputObjectSchema } from './TenantUserUncheckedUpdateWithoutReportInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantUserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TenantUserUpdateWithoutReportInputObjectSchema), z.lazy(() => TenantUserUncheckedUpdateWithoutReportInputObjectSchema)])
}).strict();
export const TenantUserUpdateToOneWithWhereWithoutReportInputObjectSchema: z.ZodType<Prisma.TenantUserUpdateToOneWithWhereWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserUpdateToOneWithWhereWithoutReportInput>;
export const TenantUserUpdateToOneWithWhereWithoutReportInputObjectZodSchema = makeSchema();
