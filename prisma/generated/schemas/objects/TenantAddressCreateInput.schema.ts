import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateNestedOneWithoutTenantAddressesInputObjectSchema } from './TenantCreateNestedOneWithoutTenantAddressesInput.schema';
import { AddressCreateNestedOneWithoutTenantAddressesInputObjectSchema } from './AddressCreateNestedOneWithoutTenantAddressesInput.schema';
import { ReportCreateNestedManyWithoutLabAddressInputObjectSchema } from './ReportCreateNestedManyWithoutLabAddressInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  isPrimary: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  tenant: z.lazy(() => TenantCreateNestedOneWithoutTenantAddressesInputObjectSchema),
  address: z.lazy(() => AddressCreateNestedOneWithoutTenantAddressesInputObjectSchema),
  Report: z.lazy(() => ReportCreateNestedManyWithoutLabAddressInputObjectSchema)
}).strict();
export const TenantAddressCreateInputObjectSchema: z.ZodType<Prisma.TenantAddressCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantAddressCreateInput>;
export const TenantAddressCreateInputObjectZodSchema = makeSchema();
