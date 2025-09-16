import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserCreateWithoutReportInputObjectSchema } from './TenantUserCreateWithoutReportInput.schema';
import { TenantUserUncheckedCreateWithoutReportInputObjectSchema } from './TenantUserUncheckedCreateWithoutReportInput.schema';
import { TenantUserCreateOrConnectWithoutReportInputObjectSchema } from './TenantUserCreateOrConnectWithoutReportInput.schema';
import { TenantUserWhereUniqueInputObjectSchema } from './TenantUserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantUserCreateWithoutReportInputObjectSchema), z.lazy(() => TenantUserUncheckedCreateWithoutReportInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantUserCreateOrConnectWithoutReportInputObjectSchema).optional(),
  connect: z.lazy(() => TenantUserWhereUniqueInputObjectSchema).optional()
}).strict();
export const TenantUserCreateNestedOneWithoutReportInputObjectSchema: z.ZodType<Prisma.TenantUserCreateNestedOneWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserCreateNestedOneWithoutReportInput>;
export const TenantUserCreateNestedOneWithoutReportInputObjectZodSchema = makeSchema();
