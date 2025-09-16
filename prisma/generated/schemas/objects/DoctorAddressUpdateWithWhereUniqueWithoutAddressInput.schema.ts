import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorAddressWhereUniqueInputObjectSchema } from './DoctorAddressWhereUniqueInput.schema';
import { DoctorAddressUpdateWithoutAddressInputObjectSchema } from './DoctorAddressUpdateWithoutAddressInput.schema';
import { DoctorAddressUncheckedUpdateWithoutAddressInputObjectSchema } from './DoctorAddressUncheckedUpdateWithoutAddressInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorAddressWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => DoctorAddressUpdateWithoutAddressInputObjectSchema), z.lazy(() => DoctorAddressUncheckedUpdateWithoutAddressInputObjectSchema)])
}).strict();
export const DoctorAddressUpdateWithWhereUniqueWithoutAddressInputObjectSchema: z.ZodType<Prisma.DoctorAddressUpdateWithWhereUniqueWithoutAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorAddressUpdateWithWhereUniqueWithoutAddressInput>;
export const DoctorAddressUpdateWithWhereUniqueWithoutAddressInputObjectZodSchema = makeSchema();
