import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorAddressWhereUniqueInputObjectSchema } from './DoctorAddressWhereUniqueInput.schema';
import { DoctorAddressCreateWithoutAddressInputObjectSchema } from './DoctorAddressCreateWithoutAddressInput.schema';
import { DoctorAddressUncheckedCreateWithoutAddressInputObjectSchema } from './DoctorAddressUncheckedCreateWithoutAddressInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DoctorAddressWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DoctorAddressCreateWithoutAddressInputObjectSchema), z.lazy(() => DoctorAddressUncheckedCreateWithoutAddressInputObjectSchema)])
}).strict();
export const DoctorAddressCreateOrConnectWithoutAddressInputObjectSchema: z.ZodType<Prisma.DoctorAddressCreateOrConnectWithoutAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorAddressCreateOrConnectWithoutAddressInput>;
export const DoctorAddressCreateOrConnectWithoutAddressInputObjectZodSchema = makeSchema();
