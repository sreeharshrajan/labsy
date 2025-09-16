import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorAddressWhereUniqueInputObjectSchema } from './DoctorAddressWhereUniqueInput.schema';
import { DoctorAddressUpdateWithoutAddressInputObjectSchema } from './DoctorAddressUpdateWithoutAddressInput.schema';
import { DoctorAddressUncheckedUpdateWithoutAddressInputObjectSchema } from './DoctorAddressUncheckedUpdateWithoutAddressInput.schema';
import { DoctorAddressCreateWithoutAddressInputObjectSchema } from './DoctorAddressCreateWithoutAddressInput.schema';
import { DoctorAddressUncheckedCreateWithoutAddressInputObjectSchema } from './DoctorAddressUncheckedCreateWithoutAddressInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorAddressWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => DoctorAddressUpdateWithoutAddressInputObjectSchema), z.lazy(() => DoctorAddressUncheckedUpdateWithoutAddressInputObjectSchema)]),
  create: z.union([z.lazy(() => DoctorAddressCreateWithoutAddressInputObjectSchema), z.lazy(() => DoctorAddressUncheckedCreateWithoutAddressInputObjectSchema)])
}).strict();
export const DoctorAddressUpsertWithWhereUniqueWithoutAddressInputObjectSchema: z.ZodType<Prisma.DoctorAddressUpsertWithWhereUniqueWithoutAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorAddressUpsertWithWhereUniqueWithoutAddressInput>;
export const DoctorAddressUpsertWithWhereUniqueWithoutAddressInputObjectZodSchema = makeSchema();
