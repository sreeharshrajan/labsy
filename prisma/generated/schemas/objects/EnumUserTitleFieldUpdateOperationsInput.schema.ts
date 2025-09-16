import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserTitleSchema } from '../enums/UserTitle.schema'

const makeSchema = () => z.object({
  set: UserTitleSchema.optional()
}).strict();
export const EnumUserTitleFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumUserTitleFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumUserTitleFieldUpdateOperationsInput>;
export const EnumUserTitleFieldUpdateOperationsInputObjectZodSchema = makeSchema();
