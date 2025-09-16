import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DoctorAddressSelectObjectSchema } from './objects/DoctorAddressSelect.schema';
import { DoctorAddressIncludeObjectSchema } from './objects/DoctorAddressInclude.schema';
import { DoctorAddressWhereUniqueInputObjectSchema } from './objects/DoctorAddressWhereUniqueInput.schema';

export const DoctorAddressFindUniqueSchema: z.ZodType<Prisma.DoctorAddressFindUniqueArgs> = z.object({ select: DoctorAddressSelectObjectSchema.optional(), include: DoctorAddressIncludeObjectSchema.optional(), where: DoctorAddressWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DoctorAddressFindUniqueArgs>;

export const DoctorAddressFindUniqueZodSchema = z.object({ select: DoctorAddressSelectObjectSchema.optional(), include: DoctorAddressIncludeObjectSchema.optional(), where: DoctorAddressWhereUniqueInputObjectSchema }).strict();