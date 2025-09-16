import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorUpdateWithoutDoctorAddressesInputObjectSchema } from './DoctorUpdateWithoutDoctorAddressesInput.schema';
import { DoctorUncheckedUpdateWithoutDoctorAddressesInputObjectSchema } from './DoctorUncheckedUpdateWithoutDoctorAddressesInput.schema';
import { DoctorCreateWithoutDoctorAddressesInputObjectSchema } from './DoctorCreateWithoutDoctorAddressesInput.schema';
import { DoctorUncheckedCreateWithoutDoctorAddressesInputObjectSchema } from './DoctorUncheckedCreateWithoutDoctorAddressesInput.schema';
import { DoctorWhereInputObjectSchema } from './DoctorWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => DoctorUpdateWithoutDoctorAddressesInputObjectSchema), z.lazy(() => DoctorUncheckedUpdateWithoutDoctorAddressesInputObjectSchema)]),
  create: z.union([z.lazy(() => DoctorCreateWithoutDoctorAddressesInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutDoctorAddressesInputObjectSchema)]),
  where: z.lazy(() => DoctorWhereInputObjectSchema).optional()
}).strict();
export const DoctorUpsertWithoutDoctorAddressesInputObjectSchema: z.ZodType<Prisma.DoctorUpsertWithoutDoctorAddressesInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpsertWithoutDoctorAddressesInput>;
export const DoctorUpsertWithoutDoctorAddressesInputObjectZodSchema = makeSchema();
