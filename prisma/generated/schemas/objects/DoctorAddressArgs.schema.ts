import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorAddressSelectObjectSchema } from './DoctorAddressSelect.schema';
import { DoctorAddressIncludeObjectSchema } from './DoctorAddressInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DoctorAddressSelectObjectSchema).optional(),
  include: z.lazy(() => DoctorAddressIncludeObjectSchema).optional()
}).strict();
export const DoctorAddressArgsObjectSchema = makeSchema();
export const DoctorAddressArgsObjectZodSchema = makeSchema();
