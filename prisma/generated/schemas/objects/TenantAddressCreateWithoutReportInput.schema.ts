import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateNestedOneWithoutTenantAddressesInputObjectSchema } from './TenantCreateNestedOneWithoutTenantAddressesInput.schema';
import { AddressCreateNestedOneWithoutTenantAddressesInputObjectSchema } from './AddressCreateNestedOneWithoutTenantAddressesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  isPrimary: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  tenant: z.lazy(() => TenantCreateNestedOneWithoutTenantAddressesInputObjectSchema),
  address: z.lazy(() => AddressCreateNestedOneWithoutTenantAddressesInputObjectSchema)
}).strict();
export const TenantAddressCreateWithoutReportInputObjectSchema: z.ZodType<Prisma.TenantAddressCreateWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantAddressCreateWithoutReportInput>;
export const TenantAddressCreateWithoutReportInputObjectZodSchema = makeSchema();
