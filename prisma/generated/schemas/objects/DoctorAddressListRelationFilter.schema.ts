import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DoctorAddressWhereInputObjectSchema } from './DoctorAddressWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => DoctorAddressWhereInputObjectSchema).optional(),
  some: z.lazy(() => DoctorAddressWhereInputObjectSchema).optional(),
  none: z.lazy(() => DoctorAddressWhereInputObjectSchema).optional()
}).strict();
export const DoctorAddressListRelationFilterObjectSchema: z.ZodType<Prisma.DoctorAddressListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.DoctorAddressListRelationFilter>;
export const DoctorAddressListRelationFilterObjectZodSchema = makeSchema();
