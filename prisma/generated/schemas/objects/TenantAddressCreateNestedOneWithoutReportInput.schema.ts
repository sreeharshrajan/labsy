import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantAddressCreateWithoutReportInputObjectSchema } from './TenantAddressCreateWithoutReportInput.schema';
import { TenantAddressUncheckedCreateWithoutReportInputObjectSchema } from './TenantAddressUncheckedCreateWithoutReportInput.schema';
import { TenantAddressCreateOrConnectWithoutReportInputObjectSchema } from './TenantAddressCreateOrConnectWithoutReportInput.schema';
import { TenantAddressWhereUniqueInputObjectSchema } from './TenantAddressWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantAddressCreateWithoutReportInputObjectSchema), z.lazy(() => TenantAddressUncheckedCreateWithoutReportInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantAddressCreateOrConnectWithoutReportInputObjectSchema).optional(),
  connect: z.lazy(() => TenantAddressWhereUniqueInputObjectSchema).optional()
}).strict();
export const TenantAddressCreateNestedOneWithoutReportInputObjectSchema: z.ZodType<Prisma.TenantAddressCreateNestedOneWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantAddressCreateNestedOneWithoutReportInput>;
export const TenantAddressCreateNestedOneWithoutReportInputObjectZodSchema = makeSchema();
