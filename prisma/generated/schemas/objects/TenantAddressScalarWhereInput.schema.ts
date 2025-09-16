import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const tenantaddressscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TenantAddressScalarWhereInputObjectSchema), z.lazy(() => TenantAddressScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TenantAddressScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TenantAddressScalarWhereInputObjectSchema), z.lazy(() => TenantAddressScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  tenantId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  addressId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  isPrimary: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const TenantAddressScalarWhereInputObjectSchema: z.ZodType<Prisma.TenantAddressScalarWhereInput> = tenantaddressscalarwhereinputSchema as unknown as z.ZodType<Prisma.TenantAddressScalarWhereInput>;
export const TenantAddressScalarWhereInputObjectZodSchema = tenantaddressscalarwhereinputSchema;
