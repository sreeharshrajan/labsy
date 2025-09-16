import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerAddressCreateWithoutAddressInputObjectSchema } from './CustomerAddressCreateWithoutAddressInput.schema';
import { CustomerAddressUncheckedCreateWithoutAddressInputObjectSchema } from './CustomerAddressUncheckedCreateWithoutAddressInput.schema';
import { CustomerAddressCreateOrConnectWithoutAddressInputObjectSchema } from './CustomerAddressCreateOrConnectWithoutAddressInput.schema';
import { CustomerAddressCreateManyAddressInputEnvelopeObjectSchema } from './CustomerAddressCreateManyAddressInputEnvelope.schema';
import { CustomerAddressWhereUniqueInputObjectSchema } from './CustomerAddressWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CustomerAddressCreateWithoutAddressInputObjectSchema), z.lazy(() => CustomerAddressCreateWithoutAddressInputObjectSchema).array(), z.lazy(() => CustomerAddressUncheckedCreateWithoutAddressInputObjectSchema), z.lazy(() => CustomerAddressUncheckedCreateWithoutAddressInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CustomerAddressCreateOrConnectWithoutAddressInputObjectSchema), z.lazy(() => CustomerAddressCreateOrConnectWithoutAddressInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CustomerAddressCreateManyAddressInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CustomerAddressWhereUniqueInputObjectSchema), z.lazy(() => CustomerAddressWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CustomerAddressCreateNestedManyWithoutAddressInputObjectSchema: z.ZodType<Prisma.CustomerAddressCreateNestedManyWithoutAddressInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAddressCreateNestedManyWithoutAddressInput>;
export const CustomerAddressCreateNestedManyWithoutAddressInputObjectZodSchema = makeSchema();
