import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantRoleCreateManySystemRoleTemplateInputObjectSchema } from './TenantRoleCreateManySystemRoleTemplateInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TenantRoleCreateManySystemRoleTemplateInputObjectSchema), z.lazy(() => TenantRoleCreateManySystemRoleTemplateInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TenantRoleCreateManySystemRoleTemplateInputEnvelopeObjectSchema: z.ZodType<Prisma.TenantRoleCreateManySystemRoleTemplateInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TenantRoleCreateManySystemRoleTemplateInputEnvelope>;
export const TenantRoleCreateManySystemRoleTemplateInputEnvelopeObjectZodSchema = makeSchema();
