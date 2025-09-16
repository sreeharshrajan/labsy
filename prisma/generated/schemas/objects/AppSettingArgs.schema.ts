import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppSettingSelectObjectSchema } from './AppSettingSelect.schema';
import { AppSettingIncludeObjectSchema } from './AppSettingInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AppSettingSelectObjectSchema).optional(),
  include: z.lazy(() => AppSettingIncludeObjectSchema).optional()
}).strict();
export const AppSettingArgsObjectSchema = makeSchema();
export const AppSettingArgsObjectZodSchema = makeSchema();
