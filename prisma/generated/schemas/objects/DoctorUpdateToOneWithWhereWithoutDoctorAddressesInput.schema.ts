import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema';
import { DoctorUpdateWithoutDoctorAddressesInputObjectSchema } from './DoctorUpdateWithoutDoctorAddressesInput.schema';
import { DoctorUncheckedUpdateWithoutDoctorAddressesInputObjectSchema } from './DoctorUncheckedUpdateWithoutDoctorAddressesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => DoctorUpdateWithoutDoctorAddressesInputObjectSchema), z.lazy(() => DoctorUncheckedUpdateWithoutDoctorAddressesInputObjectSchema)])
}).strict();
export const DoctorUpdateToOneWithWhereWithoutDoctorAddressesInputObjectSchema: z.ZodType<Prisma.DoctorUpdateToOneWithWhereWithoutDoctorAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpdateToOneWithWhereWithoutDoctorAddressesInput>;
export const DoctorUpdateToOneWithWhereWithoutDoctorAddressesInputObjectZodSchema = makeSchema();
