import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  value: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable()
}).strict();
export const AppSettingValueCreateWithoutSettingInputObjectSchema: z.ZodType<Prisma.AppSettingValueCreateWithoutSettingInput> = makeSchema() as unknown as z.ZodType<Prisma.AppSettingValueCreateWithoutSettingInput>;
export const AppSettingValueCreateWithoutSettingInputObjectZodSchema = makeSchema();
