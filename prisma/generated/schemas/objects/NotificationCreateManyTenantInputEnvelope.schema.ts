import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NotificationCreateManyTenantInputObjectSchema } from './NotificationCreateManyTenantInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => NotificationCreateManyTenantInputObjectSchema), z.lazy(() => NotificationCreateManyTenantInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const NotificationCreateManyTenantInputEnvelopeObjectSchema: z.ZodType<Prisma.NotificationCreateManyTenantInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.NotificationCreateManyTenantInputEnvelope>;
export const NotificationCreateManyTenantInputEnvelopeObjectZodSchema = makeSchema();
