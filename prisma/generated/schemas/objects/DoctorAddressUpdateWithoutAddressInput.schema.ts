import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { DoctorUpdateOneRequiredWithoutDoctorAddressesNestedInputObjectSchema } from './DoctorUpdateOneRequiredWithoutDoctorAddressesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  isPrimary: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  doctor: z.lazy(() => DoctorUpdateOneRequiredWithoutDoctorAddressesNestedInputObjectSchema).optional()
}).strict();
export const DoctorAddressUpdateWithoutAddressInputObjectSchema: z.ZodType<Prisma.DoctorAddressUpdateWithoutAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorAddressUpdateWithoutAddressInput>;
export const DoctorAddressUpdateWithoutAddressInputObjectZodSchema = makeSchema();
