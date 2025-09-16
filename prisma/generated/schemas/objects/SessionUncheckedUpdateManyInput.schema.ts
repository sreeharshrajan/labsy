import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  expires: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  sessionToken: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const SessionUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionUncheckedUpdateManyInput>;
export const SessionUncheckedUpdateManyInputObjectZodSchema = makeSchema();
