import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateNestedOneWithoutTenantAddressesInputObjectSchema } from './TenantCreateNestedOneWithoutTenantAddressesInput.schema';
import { ReportCreateNestedManyWithoutLabAddressInputObjectSchema } from './ReportCreateNestedManyWithoutLabAddressInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  isPrimary: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  tenant: z.lazy(() => TenantCreateNestedOneWithoutTenantAddressesInputObjectSchema),
  Report: z.lazy(() => ReportCreateNestedManyWithoutLabAddressInputObjectSchema).optional()
}).strict();
export const TenantAddressCreateWithoutAddressInputObjectSchema: z.ZodType<Prisma.TenantAddressCreateWithoutAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantAddressCreateWithoutAddressInput>;
export const TenantAddressCreateWithoutAddressInputObjectZodSchema = makeSchema();
