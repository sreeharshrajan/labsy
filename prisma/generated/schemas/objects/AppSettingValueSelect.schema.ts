import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppSettingArgsObjectSchema } from './AppSettingArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  settingId: z.boolean().optional(),
  setting: z.union([z.boolean(), z.lazy(() => AppSettingArgsObjectSchema)]).optional(),
  value: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional()
}).strict();
export const AppSettingValueSelectObjectSchema: z.ZodType<Prisma.AppSettingValueSelect> = makeSchema() as unknown as z.ZodType<Prisma.AppSettingValueSelect>;
export const AppSettingValueSelectObjectZodSchema = makeSchema();
