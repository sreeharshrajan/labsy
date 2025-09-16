import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserAddressCreateManyAddressInputObjectSchema } from './UserAddressCreateManyAddressInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => UserAddressCreateManyAddressInputObjectSchema), z.lazy(() => UserAddressCreateManyAddressInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const UserAddressCreateManyAddressInputEnvelopeObjectSchema: z.ZodType<Prisma.UserAddressCreateManyAddressInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.UserAddressCreateManyAddressInputEnvelope>;
export const UserAddressCreateManyAddressInputEnvelopeObjectZodSchema = makeSchema();
