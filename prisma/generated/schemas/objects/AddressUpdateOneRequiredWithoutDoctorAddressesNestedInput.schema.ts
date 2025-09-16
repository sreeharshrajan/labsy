import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AddressCreateWithoutDoctorAddressesInputObjectSchema } from './AddressCreateWithoutDoctorAddressesInput.schema';
import { AddressUncheckedCreateWithoutDoctorAddressesInputObjectSchema } from './AddressUncheckedCreateWithoutDoctorAddressesInput.schema';
import { AddressCreateOrConnectWithoutDoctorAddressesInputObjectSchema } from './AddressCreateOrConnectWithoutDoctorAddressesInput.schema';
import { AddressUpsertWithoutDoctorAddressesInputObjectSchema } from './AddressUpsertWithoutDoctorAddressesInput.schema';
import { AddressWhereUniqueInputObjectSchema } from './AddressWhereUniqueInput.schema';
import { AddressUpdateToOneWithWhereWithoutDoctorAddressesInputObjectSchema } from './AddressUpdateToOneWithWhereWithoutDoctorAddressesInput.schema';
import { AddressUpdateWithoutDoctorAddressesInputObjectSchema } from './AddressUpdateWithoutDoctorAddressesInput.schema';
import { AddressUncheckedUpdateWithoutDoctorAddressesInputObjectSchema } from './AddressUncheckedUpdateWithoutDoctorAddressesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AddressCreateWithoutDoctorAddressesInputObjectSchema), z.lazy(() => AddressUncheckedCreateWithoutDoctorAddressesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AddressCreateOrConnectWithoutDoctorAddressesInputObjectSchema).optional(),
  upsert: z.lazy(() => AddressUpsertWithoutDoctorAddressesInputObjectSchema).optional(),
  connect: z.lazy(() => AddressWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AddressUpdateToOneWithWhereWithoutDoctorAddressesInputObjectSchema), z.lazy(() => AddressUpdateWithoutDoctorAddressesInputObjectSchema), z.lazy(() => AddressUncheckedUpdateWithoutDoctorAddressesInputObjectSchema)]).optional()
}).strict();
export const AddressUpdateOneRequiredWithoutDoctorAddressesNestedInputObjectSchema: z.ZodType<Prisma.AddressUpdateOneRequiredWithoutDoctorAddressesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressUpdateOneRequiredWithoutDoctorAddressesNestedInput>;
export const AddressUpdateOneRequiredWithoutDoctorAddressesNestedInputObjectZodSchema = makeSchema();
