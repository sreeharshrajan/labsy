import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorArgsObjectSchema } from './DoctorArgs.schema';
import { AddressArgsObjectSchema } from './AddressArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  doctorId: z.boolean().optional(),
  addressId: z.boolean().optional(),
  isPrimary: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  doctor: z.union([z.boolean(), z.lazy(() => DoctorArgsObjectSchema)]).optional(),
  address: z.union([z.boolean(), z.lazy(() => AddressArgsObjectSchema)]).optional()
}).strict();
export const DoctorAddressSelectObjectSchema: z.ZodType<Prisma.DoctorAddressSelect> = makeSchema() as unknown as z.ZodType<Prisma.DoctorAddressSelect>;
export const DoctorAddressSelectObjectZodSchema = makeSchema();
