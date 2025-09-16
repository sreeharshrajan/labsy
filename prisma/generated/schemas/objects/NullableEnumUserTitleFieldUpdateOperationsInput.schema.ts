import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserTitleSchema } from '../enums/UserTitle.schema'

const makeSchema = () => z.object({
  set: UserTitleSchema.optional()
}).strict();
export const NullableEnumUserTitleFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableEnumUserTitleFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.NullableEnumUserTitleFieldUpdateOperationsInput>;
export const NullableEnumUserTitleFieldUpdateOperationsInputObjectZodSchema = makeSchema();
