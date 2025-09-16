import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  action: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  resource: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  conditions: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional()
}).strict();
export const SystemPermissionUpdateWithoutRoleTemplateInputObjectSchema: z.ZodType<Prisma.SystemPermissionUpdateWithoutRoleTemplateInput> = makeSchema() as unknown as z.ZodType<Prisma.SystemPermissionUpdateWithoutRoleTemplateInput>;
export const SystemPermissionUpdateWithoutRoleTemplateInputObjectZodSchema = makeSchema();
