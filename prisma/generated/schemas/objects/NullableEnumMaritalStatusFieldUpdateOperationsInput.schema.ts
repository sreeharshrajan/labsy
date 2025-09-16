import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MaritalStatusSchema } from '../enums/MaritalStatus.schema'

const makeSchema = () => z.object({
  set: MaritalStatusSchema.optional()
}).strict();
export const NullableEnumMaritalStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableEnumMaritalStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.NullableEnumMaritalStatusFieldUpdateOperationsInput>;
export const NullableEnumMaritalStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
