import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  settingId: z.string(),
  value: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable()
}).strict();
export const AppSettingValueCreateManyInputObjectSchema: z.ZodType<Prisma.AppSettingValueCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.AppSettingValueCreateManyInput>;
export const AppSettingValueCreateManyInputObjectZodSchema = makeSchema();
