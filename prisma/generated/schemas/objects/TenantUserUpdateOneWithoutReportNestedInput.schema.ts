import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantUserCreateWithoutReportInputObjectSchema } from './TenantUserCreateWithoutReportInput.schema';
import { TenantUserUncheckedCreateWithoutReportInputObjectSchema } from './TenantUserUncheckedCreateWithoutReportInput.schema';
import { TenantUserCreateOrConnectWithoutReportInputObjectSchema } from './TenantUserCreateOrConnectWithoutReportInput.schema';
import { TenantUserUpsertWithoutReportInputObjectSchema } from './TenantUserUpsertWithoutReportInput.schema';
import { TenantUserWhereInputObjectSchema } from './TenantUserWhereInput.schema';
import { TenantUserWhereUniqueInputObjectSchema } from './TenantUserWhereUniqueInput.schema';
import { TenantUserUpdateToOneWithWhereWithoutReportInputObjectSchema } from './TenantUserUpdateToOneWithWhereWithoutReportInput.schema';
import { TenantUserUpdateWithoutReportInputObjectSchema } from './TenantUserUpdateWithoutReportInput.schema';
import { TenantUserUncheckedUpdateWithoutReportInputObjectSchema } from './TenantUserUncheckedUpdateWithoutReportInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantUserCreateWithoutReportInputObjectSchema), z.lazy(() => TenantUserUncheckedCreateWithoutReportInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantUserCreateOrConnectWithoutReportInputObjectSchema).optional(),
  upsert: z.lazy(() => TenantUserUpsertWithoutReportInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => TenantUserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => TenantUserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => TenantUserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TenantUserUpdateToOneWithWhereWithoutReportInputObjectSchema), z.lazy(() => TenantUserUpdateWithoutReportInputObjectSchema), z.lazy(() => TenantUserUncheckedUpdateWithoutReportInputObjectSchema)]).optional()
}).strict();
export const TenantUserUpdateOneWithoutReportNestedInputObjectSchema: z.ZodType<Prisma.TenantUserUpdateOneWithoutReportNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserUpdateOneWithoutReportNestedInput>;
export const TenantUserUpdateOneWithoutReportNestedInputObjectZodSchema = makeSchema();
