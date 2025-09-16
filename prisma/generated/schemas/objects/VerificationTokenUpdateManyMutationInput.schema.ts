import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  identifier: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  expires: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  token: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const VerificationTokenUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.VerificationTokenUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.VerificationTokenUpdateManyMutationInput>;
export const VerificationTokenUpdateManyMutationInputObjectZodSchema = makeSchema();
