import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppSettingWhereInputObjectSchema } from './AppSettingWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => AppSettingWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => AppSettingWhereInputObjectSchema).optional()
}).strict();
export const AppSettingScalarRelationFilterObjectSchema: z.ZodType<Prisma.AppSettingScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AppSettingScalarRelationFilter>;
export const AppSettingScalarRelationFilterObjectZodSchema = makeSchema();
