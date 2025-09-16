import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { SystemRoleTemplateCreateNestedOneWithoutPermissionsInputObjectSchema } from './SystemRoleTemplateCreateNestedOneWithoutPermissionsInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  action: z.string(),
  resource: z.string(),
  conditions: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  roleTemplate: z.lazy(() => SystemRoleTemplateCreateNestedOneWithoutPermissionsInputObjectSchema)
}).strict();
export const SystemPermissionCreateInputObjectSchema: z.ZodType<Prisma.SystemPermissionCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.SystemPermissionCreateInput>;
export const SystemPermissionCreateInputObjectZodSchema = makeSchema();
