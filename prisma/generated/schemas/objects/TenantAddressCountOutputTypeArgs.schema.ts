import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantAddressCountOutputTypeSelectObjectSchema } from './TenantAddressCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TenantAddressCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const TenantAddressCountOutputTypeArgsObjectSchema = makeSchema();
export const TenantAddressCountOutputTypeArgsObjectZodSchema = makeSchema();
