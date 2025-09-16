import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppSettingValueFindManySchema } from '../findManyAppSettingValue.schema';
import { AppSettingCountOutputTypeArgsObjectSchema } from './AppSettingCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  key: z.boolean().optional(),
  value: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  values: z.union([z.boolean(), z.lazy(() => AppSettingValueFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => AppSettingCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const AppSettingSelectObjectSchema: z.ZodType<Prisma.AppSettingSelect> = makeSchema() as unknown as z.ZodType<Prisma.AppSettingSelect>;
export const AppSettingSelectObjectZodSchema = makeSchema();
