import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  action: z.string(),
  resource: z.string(),
  conditions: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional()
}).strict();
export const SystemPermissionUncheckedCreateWithoutRoleTemplateInputObjectSchema: z.ZodType<Prisma.SystemPermissionUncheckedCreateWithoutRoleTemplateInput> = makeSchema() as unknown as z.ZodType<Prisma.SystemPermissionUncheckedCreateWithoutRoleTemplateInput>;
export const SystemPermissionUncheckedCreateWithoutRoleTemplateInputObjectZodSchema = makeSchema();
