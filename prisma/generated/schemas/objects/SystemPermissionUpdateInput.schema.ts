import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { SystemRoleTemplateUpdateOneRequiredWithoutPermissionsNestedInputObjectSchema } from './SystemRoleTemplateUpdateOneRequiredWithoutPermissionsNestedInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  action: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  resource: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  conditions: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  roleTemplate: z.lazy(() => SystemRoleTemplateUpdateOneRequiredWithoutPermissionsNestedInputObjectSchema).optional()
}).strict();
export const SystemPermissionUpdateInputObjectSchema: z.ZodType<Prisma.SystemPermissionUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.SystemPermissionUpdateInput>;
export const SystemPermissionUpdateInputObjectZodSchema = makeSchema();
