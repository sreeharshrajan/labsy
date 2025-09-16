import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  settingId: z.string(),
  value: z.string(),
  createdAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable()
}).strict();
export const AppSettingValueUncheckedCreateInputObjectSchema: z.ZodType<Prisma.AppSettingValueUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AppSettingValueUncheckedCreateInput>;
export const AppSettingValueUncheckedCreateInputObjectZodSchema = makeSchema();
