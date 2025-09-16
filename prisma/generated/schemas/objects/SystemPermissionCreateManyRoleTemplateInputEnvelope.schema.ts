import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SystemPermissionCreateManyRoleTemplateInputObjectSchema } from './SystemPermissionCreateManyRoleTemplateInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => SystemPermissionCreateManyRoleTemplateInputObjectSchema), z.lazy(() => SystemPermissionCreateManyRoleTemplateInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const SystemPermissionCreateManyRoleTemplateInputEnvelopeObjectSchema: z.ZodType<Prisma.SystemPermissionCreateManyRoleTemplateInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.SystemPermissionCreateManyRoleTemplateInputEnvelope>;
export const SystemPermissionCreateManyRoleTemplateInputEnvelopeObjectZodSchema = makeSchema();
