import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantAddressSelectObjectSchema } from './TenantAddressSelect.schema';
import { TenantAddressIncludeObjectSchema } from './TenantAddressInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TenantAddressSelectObjectSchema).optional(),
  include: z.lazy(() => TenantAddressIncludeObjectSchema).optional()
}).strict();
export const TenantAddressArgsObjectSchema = makeSchema();
export const TenantAddressArgsObjectZodSchema = makeSchema();
