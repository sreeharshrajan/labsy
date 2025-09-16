import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerAddressCreateWithoutCustomerInputObjectSchema } from './CustomerAddressCreateWithoutCustomerInput.schema';
import { CustomerAddressUncheckedCreateWithoutCustomerInputObjectSchema } from './CustomerAddressUncheckedCreateWithoutCustomerInput.schema';
import { CustomerAddressCreateOrConnectWithoutCustomerInputObjectSchema } from './CustomerAddressCreateOrConnectWithoutCustomerInput.schema';
import { CustomerAddressUpsertWithWhereUniqueWithoutCustomerInputObjectSchema } from './CustomerAddressUpsertWithWhereUniqueWithoutCustomerInput.schema';
import { CustomerAddressCreateManyCustomerInputEnvelopeObjectSchema } from './CustomerAddressCreateManyCustomerInputEnvelope.schema';
import { CustomerAddressWhereUniqueInputObjectSchema } from './CustomerAddressWhereUniqueInput.schema';
import { CustomerAddressUpdateWithWhereUniqueWithoutCustomerInputObjectSchema } from './CustomerAddressUpdateWithWhereUniqueWithoutCustomerInput.schema';
import { CustomerAddressUpdateManyWithWhereWithoutCustomerInputObjectSchema } from './CustomerAddressUpdateManyWithWhereWithoutCustomerInput.schema';
import { CustomerAddressScalarWhereInputObjectSchema } from './CustomerAddressScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomerAddressCreateWithoutCustomerInputObjectSchema), z.lazy(() => CustomerAddressCreateWithoutCustomerInputObjectSchema).array(), z.lazy(() => CustomerAddressUncheckedCreateWithoutCustomerInputObjectSchema), z.lazy(() => CustomerAddressUncheckedCreateWithoutCustomerInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CustomerAddressCreateOrConnectWithoutCustomerInputObjectSchema), z.lazy(() => CustomerAddressCreateOrConnectWithoutCustomerInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CustomerAddressUpsertWithWhereUniqueWithoutCustomerInputObjectSchema), z.lazy(() => CustomerAddressUpsertWithWhereUniqueWithoutCustomerInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CustomerAddressCreateManyCustomerInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CustomerAddressWhereUniqueInputObjectSchema), z.lazy(() => CustomerAddressWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CustomerAddressWhereUniqueInputObjectSchema), z.lazy(() => CustomerAddressWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CustomerAddressWhereUniqueInputObjectSchema), z.lazy(() => CustomerAddressWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CustomerAddressWhereUniqueInputObjectSchema), z.lazy(() => CustomerAddressWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CustomerAddressUpdateWithWhereUniqueWithoutCustomerInputObjectSchema), z.lazy(() => CustomerAddressUpdateWithWhereUniqueWithoutCustomerInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CustomerAddressUpdateManyWithWhereWithoutCustomerInputObjectSchema), z.lazy(() => CustomerAddressUpdateManyWithWhereWithoutCustomerInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CustomerAddressScalarWhereInputObjectSchema), z.lazy(() => CustomerAddressScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CustomerAddressUncheckedUpdateManyWithoutCustomerNestedInputObjectSchema: z.ZodType<Prisma.CustomerAddressUncheckedUpdateManyWithoutCustomerNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAddressUncheckedUpdateManyWithoutCustomerNestedInput>;
export const CustomerAddressUncheckedUpdateManyWithoutCustomerNestedInputObjectZodSchema = makeSchema();
