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
export const SystemPermissionCreateManyInputObjectSchema: z.ZodType<Prisma.SystemPermissionCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.SystemPermissionCreateManyInput>;
export const SystemPermissionCreateManyInputObjectZodSchema = makeSchema();
