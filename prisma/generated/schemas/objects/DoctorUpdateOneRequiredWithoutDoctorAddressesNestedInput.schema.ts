import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorCreateWithoutDoctorAddressesInputObjectSchema } from './DoctorCreateWithoutDoctorAddressesInput.schema';
import { DoctorUncheckedCreateWithoutDoctorAddressesInputObjectSchema } from './DoctorUncheckedCreateWithoutDoctorAddressesInput.schema';
import { DoctorCreateOrConnectWithoutDoctorAddressesInputObjectSchema } from './DoctorCreateOrConnectWithoutDoctorAddressesInput.schema';
import { DoctorUpsertWithoutDoctorAddressesInputObjectSchema } from './DoctorUpsertWithoutDoctorAddressesInput.schema';
import { DoctorWhereUniqueInputObjectSchema } from './DoctorWhereUniqueInput.schema';
import { DoctorUpdateToOneWithWhereWithoutDoctorAddressesInputObjectSchema } from './DoctorUpdateToOneWithWhereWithoutDoctorAddressesInput.schema';
import { DoctorUpdateWithoutDoctorAddressesInputObjectSchema } from './DoctorUpdateWithoutDoctorAddressesInput.schema';
import { DoctorUncheckedUpdateWithoutDoctorAddressesInputObjectSchema } from './DoctorUncheckedUpdateWithoutDoctorAddressesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DoctorCreateWithoutDoctorAddressesInputObjectSchema), z.lazy(() => DoctorUncheckedCreateWithoutDoctorAddressesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DoctorCreateOrConnectWithoutDoctorAddressesInputObjectSchema).optional(),
  upsert: z.lazy(() => DoctorUpsertWithoutDoctorAddressesInputObjectSchema).optional(),
  connect: z.lazy(() => DoctorWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => DoctorUpdateToOneWithWhereWithoutDoctorAddressesInputObjectSchema), z.lazy(() => DoctorUpdateWithoutDoctorAddressesInputObjectSchema), z.lazy(() => DoctorUncheckedUpdateWithoutDoctorAddressesInputObjectSchema)]).optional()
}).strict();
export const DoctorUpdateOneRequiredWithoutDoctorAddressesNestedInputObjectSchema: z.ZodType<Prisma.DoctorUpdateOneRequiredWithoutDoctorAddressesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorUpdateOneRequiredWithoutDoctorAddressesNestedInput>;
export const DoctorUpdateOneRequiredWithoutDoctorAddressesNestedInputObjectZodSchema = makeSchema();
