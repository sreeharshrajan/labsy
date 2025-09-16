import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppSettingArgsObjectSchema } from './AppSettingArgs.schema'

const makeSchema = () => z.object({
  setting: z.union([z.boolean(), z.lazy(() => AppSettingArgsObjectSchema)]).optional()
}).strict();
export const AppSettingValueIncludeObjectSchema: z.ZodType<Prisma.AppSettingValueInclude> = makeSchema() as unknown as z.ZodType<Prisma.AppSettingValueInclude>;
export const AppSettingValueIncludeObjectZodSchema = makeSchema();
