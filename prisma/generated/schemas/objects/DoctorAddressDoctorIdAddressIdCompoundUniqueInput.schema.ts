import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  doctorId: z.string(),
  addressId: z.string()
}).strict();
export const DoctorAddressDoctorIdAddressIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.DoctorAddressDoctorIdAddressIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorAddressDoctorIdAddressIdCompoundUniqueInput>;
export const DoctorAddressDoctorIdAddressIdCompoundUniqueInputObjectZodSchema = makeSchema();
