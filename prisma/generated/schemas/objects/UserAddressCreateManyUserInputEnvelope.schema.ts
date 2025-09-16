import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAddressCreateManyUserInputObjectSchema } from './UserAddressCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => UserAddressCreateManyUserInputObjectSchema), z.lazy(() => UserAddressCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const UserAddressCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.UserAddressCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.UserAddressCreateManyUserInputEnvelope>;
export const UserAddressCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
