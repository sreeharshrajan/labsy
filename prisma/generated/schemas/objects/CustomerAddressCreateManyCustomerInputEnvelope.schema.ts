import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerAddressCreateManyCustomerInputObjectSchema } from './CustomerAddressCreateManyCustomerInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CustomerAddressCreateManyCustomerInputObjectSchema), z.lazy(() => CustomerAddressCreateManyCustomerInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CustomerAddressCreateManyCustomerInputEnvelopeObjectSchema: z.ZodType<Prisma.CustomerAddressCreateManyCustomerInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CustomerAddressCreateManyCustomerInputEnvelope>;
export const CustomerAddressCreateManyCustomerInputEnvelopeObjectZodSchema = makeSchema();
