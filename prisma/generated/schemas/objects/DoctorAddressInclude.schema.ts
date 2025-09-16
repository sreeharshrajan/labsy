import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorArgsObjectSchema } from './DoctorArgs.schema';
import { AddressArgsObjectSchema } from './AddressArgs.schema'

const makeSchema = () => z.object({
  doctor: z.union([z.boolean(), z.lazy(() => DoctorArgsObjectSchema)]).optional(),
  address: z.union([z.boolean(), z.lazy(() => AddressArgsObjectSchema)]).optional()
}).strict();
export const DoctorAddressIncludeObjectSchema: z.ZodType<Prisma.DoctorAddressInclude> = makeSchema() as unknown as z.ZodType<Prisma.DoctorAddressInclude>;
export const DoctorAddressIncludeObjectZodSchema = makeSchema();
