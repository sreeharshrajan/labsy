import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantAddressWhereInputObjectSchema } from './TenantAddressWhereInput.schema';
import { TenantAddressUpdateWithoutReportInputObjectSchema } from './TenantAddressUpdateWithoutReportInput.schema';
import { TenantAddressUncheckedUpdateWithoutReportInputObjectSchema } from './TenantAddressUncheckedUpdateWithoutReportInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantAddressWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TenantAddressUpdateWithoutReportInputObjectSchema), z.lazy(() => TenantAddressUncheckedUpdateWithoutReportInputObjectSchema)])
}).strict();
export const TenantAddressUpdateToOneWithWhereWithoutReportInputObjectSchema: z.ZodType<Prisma.TenantAddressUpdateToOneWithWhereWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantAddressUpdateToOneWithWhereWithoutReportInput>;
export const TenantAddressUpdateToOneWithWhereWithoutReportInputObjectZodSchema = makeSchema();
