import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  values: z.boolean().optional()
}).strict();
export const AppSettingCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.AppSettingCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.AppSettingCountOutputTypeSelect>;
export const AppSettingCountOutputTypeSelectObjectZodSchema = makeSchema();
