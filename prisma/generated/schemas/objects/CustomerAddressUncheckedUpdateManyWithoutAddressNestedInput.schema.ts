import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerAddressCreateWithoutAddressInputObjectSchema } from './CustomerAddressCreateWithoutAddressInput.schema';
import { CustomerAddressUncheckedCreateWithoutAddressInputObjectSchema } from './CustomerAddressUncheckedCreateWithoutAddressInput.schema';
import { CustomerAddressCreateOrConnectWithoutAddressInputObjectSchema } from './CustomerAddressCreateOrConnectWithoutAddressInput.schema';
import { CustomerAddressUpsertWithWhereUniqueWithoutAddressInputObjectSchema } from './CustomerAddressUpsertWithWhereUniqueWithoutAddressInput.schema';
import { CustomerAddressCreateManyAddressInputEnvelopeObjectSchema } from './CustomerAddressCreateManyAddressInputEnvelope.schema';
import { CustomerAddressWhereUniqueInputObjectSchema } from './CustomerAddressWhereUniqueInput.schema';
import { CustomerAddressUpdateWithWhereUniqueWithoutAddressInputObjectSchema } from './CustomerAddressUpdateWithWhereUniqueWithoutAddressInput.schema';
import { CustomerAddressUpdateManyWithWhereWithoutAddressInputObjectSchema } from './CustomerAddressUpdateManyWithWhereWithoutAddressInput.schema';
import { CustomerAddressScalarWhereInputObjectSchema } from './CustomerAddressScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomerAddressCreateWithoutAddressInputObjectSchema), z.lazy(() => CustomerAddressCreateWithoutAddressInputObjectSchema).array(), z.lazy(() => CustomerAddressUncheckedCreateWithoutAddressInputObjectSchema), z.lazy(() => CustomerAddressUncheckedCreateWithoutAddressInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CustomerAddressCreateOrConnectWithoutAddressInputObjectSchema), z.lazy(() => CustomerAddressCreateOrConnectWithoutAddressInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CustomerAddressUpsertWithWhereUniqueWithoutAddressInputObjectSchema), z.lazy(() => CustomerAddressUpsertWithWhereUniqueWithoutAddressInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CustomerAddressCreateManyAddressInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CustomerAddressWhereUniqueInputObjectSchema), z.lazy(() => CustomerAddressWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CustomerAddressWhereUniqueInputObjectSchema), z.lazy(() => CustomerAddressWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CustomerAddressWhereUniqueInputObjectSchema), z.lazy(() => CustomerAddressWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CustomerAddressWhereUniqueInputObjectSchema), z.lazy(() => CustomerAddressWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CustomerAddressUpdateWithWhereUniqueWithoutAddressInputObjectSchema), z.lazy(() => CustomerAddressUpdateWithWhereUniqueWithoutAddressInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CustomerAddressUpdateManyWithWhereWithoutAddressInputObjectSchema), z.lazy(() => CustomerAddressUpdateManyWithWhereWithoutAddressInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CustomerAddressScalarWhereInputObjectSchema), z.lazy(() => CustomerAddressScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CustomerAddressUncheckedUpdateManyWithoutAddressNestedInputObjectSchema: z.ZodType<Prisma.CustomerAddressUncheckedUpdateManyWithoutAddressNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAddressUncheckedUpdateManyWithoutAddressNestedInput>;
export const CustomerAddressUncheckedUpdateManyWithoutAddressNestedInputObjectZodSchema = makeSchema();
