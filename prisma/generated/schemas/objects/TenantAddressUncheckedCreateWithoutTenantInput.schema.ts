import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportUncheckedCreateNestedManyWithoutLabAddressInputObjectSchema } from './ReportUncheckedCreateNestedManyWithoutLabAddressInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  addressId: z.string(),
  isPrimary: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  Report: z.lazy(() => ReportUncheckedCreateNestedManyWithoutLabAddressInputObjectSchema).optional()
}).strict();
export const TenantAddressUncheckedCreateWithoutTenantInputObjectSchema: z.ZodType<Prisma.TenantAddressUncheckedCreateWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantAddressUncheckedCreateWithoutTenantInput>;
export const TenantAddressUncheckedCreateWithoutTenantInputObjectZodSchema = makeSchema();
