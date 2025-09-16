import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportUncheckedCreateNestedManyWithoutLabAddressInputObjectSchema } from './ReportUncheckedCreateNestedManyWithoutLabAddressInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  tenantId: z.string(),
  addressId: z.string(),
  isPrimary: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  Report: z.lazy(() => ReportUncheckedCreateNestedManyWithoutLabAddressInputObjectSchema)
}).strict();
export const TenantAddressUncheckedCreateInputObjectSchema: z.ZodType<Prisma.TenantAddressUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantAddressUncheckedCreateInput>;
export const TenantAddressUncheckedCreateInputObjectZodSchema = makeSchema();
