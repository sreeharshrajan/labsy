import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { PaymentMethodSchema } from '../enums/PaymentMethod.schema';
import { EnumPaymentMethodFieldUpdateOperationsInputObjectSchema } from './EnumPaymentMethodFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema';
import { EnumPaymentStatusFieldUpdateOperationsInputObjectSchema } from './EnumPaymentStatusFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  amount: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  paymentDate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  paymentMethod: z.union([PaymentMethodSchema, z.lazy(() => EnumPaymentMethodFieldUpdateOperationsInputObjectSchema)]).optional(),
  referenceNo: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  status: z.union([PaymentStatusSchema, z.lazy(() => EnumPaymentStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  notes: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const DoctorCommissionPaymentUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.DoctorCommissionPaymentUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorCommissionPaymentUpdateManyMutationInput>;
export const DoctorCommissionPaymentUpdateManyMutationInputObjectZodSchema = makeSchema();
