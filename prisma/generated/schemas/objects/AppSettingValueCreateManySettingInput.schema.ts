import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  value: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable()
}).strict();
export const AppSettingValueCreateManySettingInputObjectSchema: z.ZodType<Prisma.AppSettingValueCreateManySettingInput> = makeSchema() as unknown as z.ZodType<Prisma.AppSettingValueCreateManySettingInput>;
export const AppSettingValueCreateManySettingInputObjectZodSchema = makeSchema();
