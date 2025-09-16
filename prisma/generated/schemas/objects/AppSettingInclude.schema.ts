import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppSettingValueFindManySchema } from '../findManyAppSettingValue.schema';
import { AppSettingCountOutputTypeArgsObjectSchema } from './AppSettingCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  values: z.union([z.boolean(), z.lazy(() => AppSettingValueFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => AppSettingCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const AppSettingIncludeObjectSchema: z.ZodType<Prisma.AppSettingInclude> = makeSchema() as unknown as z.ZodType<Prisma.AppSettingInclude>;
export const AppSettingIncludeObjectZodSchema = makeSchema();
