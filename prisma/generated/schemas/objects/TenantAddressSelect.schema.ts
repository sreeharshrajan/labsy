import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantArgsObjectSchema } from './TenantArgs.schema';
import { AddressArgsObjectSchema } from './AddressArgs.schema';
import { ReportFindManySchema } from '../findManyReport.schema';
import { TenantAddressCountOutputTypeArgsObjectSchema } from './TenantAddressCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  tenantId: z.boolean().optional(),
  addressId: z.boolean().optional(),
  isPrimary: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  tenant: z.union([z.boolean(), z.lazy(() => TenantArgsObjectSchema)]).optional(),
  address: z.union([z.boolean(), z.lazy(() => AddressArgsObjectSchema)]).optional(),
  Report: z.union([z.boolean(), z.lazy(() => ReportFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TenantAddressCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TenantAddressSelectObjectSchema: z.ZodType<Prisma.TenantAddressSelect> = makeSchema() as unknown as z.ZodType<Prisma.TenantAddressSelect>;
export const TenantAddressSelectObjectZodSchema = makeSchema();
