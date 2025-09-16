import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantAddressCreateWithoutReportInputObjectSchema } from './TenantAddressCreateWithoutReportInput.schema';
import { TenantAddressUncheckedCreateWithoutReportInputObjectSchema } from './TenantAddressUncheckedCreateWithoutReportInput.schema';
import { TenantAddressCreateOrConnectWithoutReportInputObjectSchema } from './TenantAddressCreateOrConnectWithoutReportInput.schema';
import { TenantAddressUpsertWithoutReportInputObjectSchema } from './TenantAddressUpsertWithoutReportInput.schema';
import { TenantAddressWhereInputObjectSchema } from './TenantAddressWhereInput.schema';
import { TenantAddressWhereUniqueInputObjectSchema } from './TenantAddressWhereUniqueInput.schema';
import { TenantAddressUpdateToOneWithWhereWithoutReportInputObjectSchema } from './TenantAddressUpdateToOneWithWhereWithoutReportInput.schema';
import { TenantAddressUpdateWithoutReportInputObjectSchema } from './TenantAddressUpdateWithoutReportInput.schema';
import { TenantAddressUncheckedUpdateWithoutReportInputObjectSchema } from './TenantAddressUncheckedUpdateWithoutReportInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantAddressCreateWithoutReportInputObjectSchema), z.lazy(() => TenantAddressUncheckedCreateWithoutReportInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantAddressCreateOrConnectWithoutReportInputObjectSchema).optional(),
  upsert: z.lazy(() => TenantAddressUpsertWithoutReportInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => TenantAddressWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => TenantAddressWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => TenantAddressWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TenantAddressUpdateToOneWithWhereWithoutReportInputObjectSchema), z.lazy(() => TenantAddressUpdateWithoutReportInputObjectSchema), z.lazy(() => TenantAddressUncheckedUpdateWithoutReportInputObjectSchema)]).optional()
}).strict();
export const TenantAddressUpdateOneWithoutReportNestedInputObjectSchema: z.ZodType<Prisma.TenantAddressUpdateOneWithoutReportNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantAddressUpdateOneWithoutReportNestedInput>;
export const TenantAddressUpdateOneWithoutReportNestedInputObjectZodSchema = makeSchema();
