import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppSettingCountOutputTypeSelectObjectSchema } from './AppSettingCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AppSettingCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const AppSettingCountOutputTypeArgsObjectSchema = makeSchema();
export const AppSettingCountOutputTypeArgsObjectZodSchema = makeSchema();
