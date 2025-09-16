import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { DoctorUpdateOneRequiredWithoutDoctorAddressesNestedInputObjectSchema } from './DoctorUpdateOneRequiredWithoutDoctorAddressesNestedInput.schema';
import { AddressUpdateOneRequiredWithoutDoctorAddressesNestedInputObjectSchema } from './AddressUpdateOneRequiredWithoutDoctorAddressesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  isPrimary: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  doctor: z.lazy(() => DoctorUpdateOneRequiredWithoutDoctorAddressesNestedInputObjectSchema).optional(),
  address: z.lazy(() => AddressUpdateOneRequiredWithoutDoctorAddressesNestedInputObjectSchema).optional()
}).strict();
export const DoctorAddressUpdateInputObjectSchema: z.ZodType<Prisma.DoctorAddressUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorAddressUpdateInput>;
export const DoctorAddressUpdateInputObjectZodSchema = makeSchema();
