import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCreateNestedOneWithoutDoctorAddressesInputObjectSchema } from './DoctorCreateNestedOneWithoutDoctorAddressesInput.schema';
import { AddressCreateNestedOneWithoutDoctorAddressesInputObjectSchema } from './AddressCreateNestedOneWithoutDoctorAddressesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  isPrimary: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  doctor: z.lazy(() => DoctorCreateNestedOneWithoutDoctorAddressesInputObjectSchema),
  address: z.lazy(() => AddressCreateNestedOneWithoutDoctorAddressesInputObjectSchema)
}).strict();
export const DoctorAddressCreateInputObjectSchema: z.ZodType<Prisma.DoctorAddressCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorAddressCreateInput>;
export const DoctorAddressCreateInputObjectZodSchema = makeSchema();
