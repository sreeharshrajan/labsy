import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantAddressWhereInputObjectSchema } from './TenantAddressWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => TenantAddressWhereInputObjectSchema).optional(),
  some: z.lazy(() => TenantAddressWhereInputObjectSchema).optional(),
  none: z.lazy(() => TenantAddressWhereInputObjectSchema).optional()
}).strict();
export const TenantAddressListRelationFilterObjectSchema: z.ZodType<Prisma.TenantAddressListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TenantAddressListRelationFilter>;
export const TenantAddressListRelationFilterObjectZodSchema = makeSchema();
