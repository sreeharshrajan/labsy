import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { AddressUpdateOneRequiredWithoutDoctorAddressesNestedInputObjectSchema } from './AddressUpdateOneRequiredWithoutDoctorAddressesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  isPrimary: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  address: z.lazy(() => AddressUpdateOneRequiredWithoutDoctorAddressesNestedInputObjectSchema).optional()
}).strict();
export const DoctorAddressUpdateWithoutDoctorInputObjectSchema: z.ZodType<Prisma.DoctorAddressUpdateWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorAddressUpdateWithoutDoctorInput>;
export const DoctorAddressUpdateWithoutDoctorInputObjectZodSchema = makeSchema();
