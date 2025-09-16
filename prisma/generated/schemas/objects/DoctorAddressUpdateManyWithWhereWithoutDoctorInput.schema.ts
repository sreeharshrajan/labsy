import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorAddressScalarWhereInputObjectSchema } from './DoctorAddressScalarWhereInput.schema';
import { DoctorAddressUpdateManyMutationInputObjectSchema } from './DoctorAddressUpdateManyMutationInput.schema';
import { DoctorAddressUncheckedUpdateManyWithoutDoctorInputObjectSchema } from './DoctorAddressUncheckedUpdateManyWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorAddressScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => DoctorAddressUpdateManyMutationInputObjectSchema), z.lazy(() => DoctorAddressUncheckedUpdateManyWithoutDoctorInputObjectSchema)])
}).strict();
export const DoctorAddressUpdateManyWithWhereWithoutDoctorInputObjectSchema: z.ZodType<Prisma.DoctorAddressUpdateManyWithWhereWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorAddressUpdateManyWithWhereWithoutDoctorInput>;
export const DoctorAddressUpdateManyWithWhereWithoutDoctorInputObjectZodSchema = makeSchema();
