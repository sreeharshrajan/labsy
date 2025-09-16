import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorStatusSchema } from '../enums/DoctorStatus.schema'

const makeSchema = () => z.object({
  set: DoctorStatusSchema.optional()
}).strict();
export const EnumDoctorStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumDoctorStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumDoctorStatusFieldUpdateOperationsInput>;
export const EnumDoctorStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
