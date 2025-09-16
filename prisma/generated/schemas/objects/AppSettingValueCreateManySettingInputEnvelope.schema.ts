import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppSettingValueCreateManySettingInputObjectSchema } from './AppSettingValueCreateManySettingInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AppSettingValueCreateManySettingInputObjectSchema), z.lazy(() => AppSettingValueCreateManySettingInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AppSettingValueCreateManySettingInputEnvelopeObjectSchema: z.ZodType<Prisma.AppSettingValueCreateManySettingInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AppSettingValueCreateManySettingInputEnvelope>;
export const AppSettingValueCreateManySettingInputEnvelopeObjectZodSchema = makeSchema();
