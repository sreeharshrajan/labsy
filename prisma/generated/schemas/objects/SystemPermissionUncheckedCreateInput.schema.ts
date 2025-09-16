import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  action: z.string(),
  resource: z.string(),
  conditions: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  roleTemplateId: z.string()
}).strict();
export const SystemPermissionUncheckedCreateInputObjectSchema: z.ZodType<Prisma.SystemPermissionUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.SystemPermissionUncheckedCreateInput>;
export const SystemPermissionUncheckedCreateInputObjectZodSchema = makeSchema();
