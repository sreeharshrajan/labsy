import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserTitleSchema } from '../enums/UserTitle.schema';
import { NullableEnumUserTitleFieldUpdateOperationsInputObjectSchema } from './NullableEnumUserTitleFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { GenderSchema } from '../enums/Gender.schema';
import { NullableEnumGenderFieldUpdateOperationsInputObjectSchema } from './NullableEnumGenderFieldUpdateOperationsInput.schema';
import { BloodGroupSchema } from '../enums/BloodGroup.schema';
import { NullableEnumBloodGroupFieldUpdateOperationsInputObjectSchema } from './NullableEnumBloodGroupFieldUpdateOperationsInput.schema';
import { MaritalStatusSchema } from '../enums/MaritalStatus.schema';
import { NullableEnumMaritalStatusFieldUpdateOperationsInputObjectSchema } from './NullableEnumMaritalStatusFieldUpdateOperationsInput.schema';
import { CustomerUpdateknownAllergiesInputObjectSchema } from './CustomerUpdateknownAllergiesInput.schema';
import { CustomerUpdatechronicConditionsInputObjectSchema } from './CustomerUpdatechronicConditionsInput.schema';
import { CustomerUpdatemedicationsInputObjectSchema } from './CustomerUpdatemedicationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([UserTitleSchema, z.lazy(() => NullableEnumUserTitleFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  phone: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  dateOfBirth: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  gender: z.union([GenderSchema, z.lazy(() => NullableEnumGenderFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  bloodGroup: z.union([BloodGroupSchema, z.lazy(() => NullableEnumBloodGroupFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  maritalStatus: z.union([MaritalStatusSchema, z.lazy(() => NullableEnumMaritalStatusFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  aadharNumber: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  panNumber: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  passportNumber: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  knownAllergies: z.union([z.lazy(() => CustomerUpdateknownAllergiesInputObjectSchema), z.string().array()]).optional(),
  chronicConditions: z.union([z.lazy(() => CustomerUpdatechronicConditionsInputObjectSchema), z.string().array()]).optional(),
  medications: z.union([z.lazy(() => CustomerUpdatemedicationsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tenantId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const CustomerUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.CustomerUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerUncheckedUpdateManyInput>;
export const CustomerUncheckedUpdateManyInputObjectZodSchema = makeSchema();
