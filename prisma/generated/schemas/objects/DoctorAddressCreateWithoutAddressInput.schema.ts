import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCreateNestedOneWithoutDoctorAddressesInputObjectSchema } from './DoctorCreateNestedOneWithoutDoctorAddressesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  isPrimary: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  doctor: z.lazy(() => DoctorCreateNestedOneWithoutDoctorAddressesInputObjectSchema)
}).strict();
export const DoctorAddressCreateWithoutAddressInputObjectSchema: z.ZodType<Prisma.DoctorAddressCreateWithoutAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorAddressCreateWithoutAddressInput>;
export const DoctorAddressCreateWithoutAddressInputObjectZodSchema = makeSchema();
