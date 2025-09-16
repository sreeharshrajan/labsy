import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AddressCreateNestedOneWithoutTenantAddressesInputObjectSchema } from './AddressCreateNestedOneWithoutTenantAddressesInput.schema';
import { ReportCreateNestedManyWithoutLabAddressInputObjectSchema } from './ReportCreateNestedManyWithoutLabAddressInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  isPrimary: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  address: z.lazy(() => AddressCreateNestedOneWithoutTenantAddressesInputObjectSchema),
  Report: z.lazy(() => ReportCreateNestedManyWithoutLabAddressInputObjectSchema).optional()
}).strict();
export const TenantAddressCreateWithoutTenantInputObjectSchema: z.ZodType<Prisma.TenantAddressCreateWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantAddressCreateWithoutTenantInput>;
export const TenantAddressCreateWithoutTenantInputObjectZodSchema = makeSchema();
