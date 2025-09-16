import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ServiceCountOutputTypeSelectObjectSchema } from './ServiceCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ServiceCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ServiceCountOutputTypeArgsObjectSchema = makeSchema();
export const ServiceCountOutputTypeArgsObjectZodSchema = makeSchema();
