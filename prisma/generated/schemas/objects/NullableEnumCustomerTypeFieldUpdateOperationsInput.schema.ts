import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerTypeSchema } from '../enums/CustomerType.schema'

const makeSchema = () => z.object({
  set: CustomerTypeSchema.optional()
}).strict();
export const NullableEnumCustomerTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableEnumCustomerTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.NullableEnumCustomerTypeFieldUpdateOperationsInput>;
export const NullableEnumCustomerTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
