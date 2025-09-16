import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { DoctorAddressSelectObjectSchema } from './objects/DoctorAddressSelect.schema';
import { DoctorAddressIncludeObjectSchema } from './objects/DoctorAddressInclude.schema';
import { DoctorAddressWhereUniqueInputObjectSchema } from './objects/DoctorAddressWhereUniqueInput.schema';

export const DoctorAddressFindUniqueOrThrowSchema: z.ZodType<Prisma.DoctorAddressFindUniqueOrThrowArgs> = z.object({ select: DoctorAddressSelectObjectSchema.optional(), include: DoctorAddressIncludeObjectSchema.optional(), where: DoctorAddressWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DoctorAddressFindUniqueOrThrowArgs>;

export const DoctorAddressFindUniqueOrThrowZodSchema = z.object({ select: DoctorAddressSelectObjectSchema.optional(), include: DoctorAddressIncludeObjectSchema.optional(), where: DoctorAddressWhereUniqueInputObjectSchema }).strict();