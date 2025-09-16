import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  value: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable()
}).strict();
export const AppSettingValueUncheckedCreateWithoutSettingInputObjectSchema: z.ZodType<Prisma.AppSettingValueUncheckedCreateWithoutSettingInput> = makeSchema() as unknown as z.ZodType<Prisma.AppSettingValueUncheckedCreateWithoutSettingInput>;
export const AppSettingValueUncheckedCreateWithoutSettingInputObjectZodSchema = makeSchema();
