import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportUncheckedCreateNestedManyWithoutLabAddressInputObjectSchema } from './ReportUncheckedCreateNestedManyWithoutLabAddressInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  tenantId: z.string(),
  isPrimary: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  Report: z.lazy(() => ReportUncheckedCreateNestedManyWithoutLabAddressInputObjectSchema).optional()
}).strict();
export const TenantAddressUncheckedCreateWithoutAddressInputObjectSchema: z.ZodType<Prisma.TenantAddressUncheckedCreateWithoutAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantAddressUncheckedCreateWithoutAddressInput>;
export const TenantAddressUncheckedCreateWithoutAddressInputObjectZodSchema = makeSchema();
