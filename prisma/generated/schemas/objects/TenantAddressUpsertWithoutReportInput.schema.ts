import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantAddressUpdateWithoutReportInputObjectSchema } from './TenantAddressUpdateWithoutReportInput.schema';
import { TenantAddressUncheckedUpdateWithoutReportInputObjectSchema } from './TenantAddressUncheckedUpdateWithoutReportInput.schema';
import { TenantAddressCreateWithoutReportInputObjectSchema } from './TenantAddressCreateWithoutReportInput.schema';
import { TenantAddressUncheckedCreateWithoutReportInputObjectSchema } from './TenantAddressUncheckedCreateWithoutReportInput.schema';
import { TenantAddressWhereInputObjectSchema } from './TenantAddressWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TenantAddressUpdateWithoutReportInputObjectSchema), z.lazy(() => TenantAddressUncheckedUpdateWithoutReportInputObjectSchema)]),
  create: z.union([z.lazy(() => TenantAddressCreateWithoutReportInputObjectSchema), z.lazy(() => TenantAddressUncheckedCreateWithoutReportInputObjectSchema)]),
  where: z.lazy(() => TenantAddressWhereInputObjectSchema).optional()
}).strict();
export const TenantAddressUpsertWithoutReportInputObjectSchema: z.ZodType<Prisma.TenantAddressUpsertWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantAddressUpsertWithoutReportInput>;
export const TenantAddressUpsertWithoutReportInputObjectZodSchema = makeSchema();
