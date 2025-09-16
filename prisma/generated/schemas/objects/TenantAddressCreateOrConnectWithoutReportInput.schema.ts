import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantAddressWhereUniqueInputObjectSchema } from './TenantAddressWhereUniqueInput.schema';
import { TenantAddressCreateWithoutReportInputObjectSchema } from './TenantAddressCreateWithoutReportInput.schema';
import { TenantAddressUncheckedCreateWithoutReportInputObjectSchema } from './TenantAddressUncheckedCreateWithoutReportInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TenantAddressWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TenantAddressCreateWithoutReportInputObjectSchema), z.lazy(() => TenantAddressUncheckedCreateWithoutReportInputObjectSchema)])
}).strict();
export const TenantAddressCreateOrConnectWithoutReportInputObjectSchema: z.ZodType<Prisma.TenantAddressCreateOrConnectWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantAddressCreateOrConnectWithoutReportInput>;
export const TenantAddressCreateOrConnectWithoutReportInputObjectZodSchema = makeSchema();
