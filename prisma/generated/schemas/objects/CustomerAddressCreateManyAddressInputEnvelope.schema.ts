import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerAddressCreateManyAddressInputObjectSchema } from './CustomerAddressCreateManyAddressInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CustomerAddressCreateManyAddressInputObjectSchema), z.lazy(() => CustomerAddressCreateManyAddressInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CustomerAddressCreateManyAddressInputEnvelopeObjectSchema: z.ZodType<Prisma.CustomerAddressCreateManyAddressInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAddressCreateManyAddressInputEnvelope>;
export const CustomerAddressCreateManyAddressInputEnvelopeObjectZodSchema = makeSchema();
