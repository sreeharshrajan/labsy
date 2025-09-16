import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppSettingValueSelectObjectSchema } from './AppSettingValueSelect.schema';
import { AppSettingValueIncludeObjectSchema } from './AppSettingValueInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AppSettingValueSelectObjectSchema).optional(),
  include: z.lazy(() => AppSettingValueIncludeObjectSchema).optional()
}).strict();
export const AppSettingValueArgsObjectSchema = makeSchema();
export const AppSettingValueArgsObjectZodSchema = makeSchema();
