import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorAddressScalarWhereInputObjectSchema } from './DoctorAddressScalarWhereInput.schema';
import { DoctorAddressUpdateManyMutationInputObjectSchema } from './DoctorAddressUpdateManyMutationInput.schema';
import { DoctorAddressUncheckedUpdateManyWithoutAddressInputObjectSchema } from './DoctorAddressUncheckedUpdateManyWithoutAddressInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorAddressScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => DoctorAddressUpdateManyMutationInputObjectSchema), z.lazy(() => DoctorAddressUncheckedUpdateManyWithoutAddressInputObjectSchema)])
}).strict();
export const DoctorAddressUpdateManyWithWhereWithoutAddressInputObjectSchema: z.ZodType<Prisma.DoctorAddressUpdateManyWithWhereWithoutAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorAddressUpdateManyWithWhereWithoutAddressInput>;
export const DoctorAddressUpdateManyWithWhereWithoutAddressInputObjectZodSchema = makeSchema();
