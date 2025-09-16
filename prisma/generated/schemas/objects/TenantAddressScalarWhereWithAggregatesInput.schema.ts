import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const tenantaddressscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => TenantAddressScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TenantAddressScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TenantAddressScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TenantAddressScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TenantAddressScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  tenantId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  addressId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  isPrimary: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const TenantAddressScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TenantAddressScalarWhereWithAggregatesInput> = tenantaddressscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.TenantAddressScalarWhereWithAggregatesInput>;
export const TenantAddressScalarWhereWithAggregatesInputObjectZodSchema = tenantaddressscalarwherewithaggregatesinputSchema;
