import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  doctorId: z.string(),
  addressId: z.string(),
  isPrimary: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable()
}).strict();
export const DoctorAddressUncheckedCreateInputObjectSchema: z.ZodType<Prisma.DoctorAddressUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorAddressUncheckedCreateInput>;
export const DoctorAddressUncheckedCreateInputObjectZodSchema = makeSchema();
