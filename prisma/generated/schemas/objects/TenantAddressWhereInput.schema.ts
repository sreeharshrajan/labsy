import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { TenantScalarRelationFilterObjectSchema } from './TenantScalarRelationFilter.schema';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema';
import { AddressScalarRelationFilterObjectSchema } from './AddressScalarRelationFilter.schema';
import { AddressWhereInputObjectSchema } from './AddressWhereInput.schema';
import { ReportListRelationFilterObjectSchema } from './ReportListRelationFilter.schema'

const tenantaddresswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TenantAddressWhereInputObjectSchema), z.lazy(() => TenantAddressWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TenantAddressWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TenantAddressWhereInputObjectSchema), z.lazy(() => TenantAddressWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  tenantId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  addressId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  isPrimary: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  tenant: z.union([z.lazy(() => TenantScalarRelationFilterObjectSchema), z.lazy(() => TenantWhereInputObjectSchema)]).optional(),
  address: z.union([z.lazy(() => AddressScalarRelationFilterObjectSchema), z.lazy(() => AddressWhereInputObjectSchema)]).optional(),
  Report: z.lazy(() => ReportListRelationFilterObjectSchema).optional()
}).strict();
export const TenantAddressWhereInputObjectSchema: z.ZodType<Prisma.TenantAddressWhereInput> = tenantaddresswhereinputSchema as unknown as z.ZodType<Prisma.TenantAddressWhereInput>;
export const TenantAddressWhereInputObjectZodSchema = tenantaddresswhereinputSchema;
