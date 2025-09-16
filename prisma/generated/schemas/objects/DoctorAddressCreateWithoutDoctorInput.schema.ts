import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AddressCreateNestedOneWithoutDoctorAddressesInputObjectSchema } from './AddressCreateNestedOneWithoutDoctorAddressesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  isPrimary: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  address: z.lazy(() => AddressCreateNestedOneWithoutDoctorAddressesInputObjectSchema)
}).strict();
export const DoctorAddressCreateWithoutDoctorInputObjectSchema: z.ZodType<Prisma.DoctorAddressCreateWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorAddressCreateWithoutDoctorInput>;
export const DoctorAddressCreateWithoutDoctorInputObjectZodSchema = makeSchema();
