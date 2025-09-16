import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantArgsObjectSchema } from './TenantArgs.schema';
import { AddressArgsObjectSchema } from './AddressArgs.schema';
import { ReportFindManySchema } from '../findManyReport.schema';
import { TenantAddressCountOutputTypeArgsObjectSchema } from './TenantAddressCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  tenant: z.union([z.boolean(), z.lazy(() => TenantArgsObjectSchema)]).optional(),
  address: z.union([z.boolean(), z.lazy(() => AddressArgsObjectSchema)]).optional(),
  Report: z.union([z.boolean(), z.lazy(() => ReportFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TenantAddressCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TenantAddressIncludeObjectSchema: z.ZodType<Prisma.TenantAddressInclude> = makeSchema() as unknown as z.ZodType<Prisma.TenantAddressInclude>;
export const TenantAddressIncludeObjectZodSchema = makeSchema();
