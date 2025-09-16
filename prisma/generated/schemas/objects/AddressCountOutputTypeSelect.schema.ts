import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tenantAddresses: z.boolean().optional(),
  userAddresses: z.boolean().optional(),
  customerAddresses: z.boolean().optional(),
  doctorAddresses: z.boolean().optional()
}).strict();
export const AddressCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.AddressCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.AddressCountOutputTypeSelect>;
export const AddressCountOutputTypeSelectObjectZodSchema = makeSchema();
