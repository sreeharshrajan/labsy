import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCommissionStatusSchema } from '../enums/DoctorCommissionStatus.schema'

const makeSchema = () => z.object({
  set: DoctorCommissionStatusSchema.optional()
}).strict();
export const EnumDoctorCommissionStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumDoctorCommissionStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumDoctorCommissionStatusFieldUpdateOperationsInput>;
export const EnumDoctorCommissionStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
