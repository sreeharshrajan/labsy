import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BloodGroupSchema } from '../enums/BloodGroup.schema'

const makeSchema = () => z.object({
  set: BloodGroupSchema.optional()
}).strict();
export const NullableEnumBloodGroupFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableEnumBloodGroupFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.NullableEnumBloodGroupFieldUpdateOperationsInput>;
export const NullableEnumBloodGroupFieldUpdateOperationsInputObjectZodSchema = makeSchema();
