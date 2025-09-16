import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppSettingValueWhereInputObjectSchema } from './AppSettingValueWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => AppSettingValueWhereInputObjectSchema).optional(),
  some: z.lazy(() => AppSettingValueWhereInputObjectSchema).optional(),
  none: z.lazy(() => AppSettingValueWhereInputObjectSchema).optional()
}).strict();
export const AppSettingValueListRelationFilterObjectSchema: z.ZodType<Prisma.AppSettingValueListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AppSettingValueListRelationFilter>;
export const AppSettingValueListRelationFilterObjectZodSchema = makeSchema();
