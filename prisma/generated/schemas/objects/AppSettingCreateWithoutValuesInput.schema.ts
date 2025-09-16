import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  key: z.string(),
  value: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable()
}).strict();
export const AppSettingCreateWithoutValuesInputObjectSchema: z.ZodType<Prisma.AppSettingCreateWithoutValuesInput> = makeSchema() as unknown as z.ZodType<Prisma.AppSettingCreateWithoutValuesInput>;
export const AppSettingCreateWithoutValuesInputObjectZodSchema = makeSchema();
