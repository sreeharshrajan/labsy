import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AccountCreateWithoutUserInputObjectSchema } from './AccountCreateWithoutUserInput.schema';
import { AccountUncheckedCreateWithoutUserInputObjectSchema } from './AccountUncheckedCreateWithoutUserInput.schema';
import { AccountCreateOrConnectWithoutUserInputObjectSchema } from './AccountCreateOrConnectWithoutUserInput.schema';
import { AccountUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './AccountUpsertWithWhereUniqueWithoutUserInput.schema';
import { AccountCreateManyUserInputEnvelopeObjectSchema } from './AccountCreateManyUserInputEnvelope.schema';
import { AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema';
import { AccountUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './AccountUpdateWithWhereUniqueWithoutUserInput.schema';
import { AccountUpdateManyWithWhereWithoutUserInputObjectSchema } from './AccountUpdateManyWithWhereWithoutUserInput.schema';
import { AccountScalarWhereInputObjectSchema } from './AccountScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AccountCreateWithoutUserInputObjectSchema), z.lazy(() => AccountCreateWithoutUserInputObjectSchema).array(), z.lazy(() => AccountUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => AccountUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AccountCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => AccountCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AccountWhereUniqueInputObjectSchema), z.lazy(() => AccountWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AccountWhereUniqueInputObjectSchema), z.lazy(() => AccountWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AccountWhereUniqueInputObjectSchema), z.lazy(() => AccountWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AccountWhereUniqueInputObjectSchema), z.lazy(() => AccountWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AccountScalarWhereInputObjectSchema), z.lazy(() => AccountScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AccountUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.AccountUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AccountUpdateManyWithoutUserNestedInput>;
export const AccountUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
