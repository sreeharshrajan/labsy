import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { DoctorOrderByWithRelationInputObjectSchema } from './DoctorOrderByWithRelationInput.schema';
import { AddressOrderByWithRelationInputObjectSchema } from './AddressOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  doctorId: SortOrderSchema.optional(),
  addressId: SortOrderSchema.optional(),
  isPrimary: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  doctor: z.lazy(() => DoctorOrderByWithRelationInputObjectSchema).optional(),
  address: z.lazy(() => AddressOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const DoctorAddressOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.DoctorAddressOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.DoctorAddressOrderByWithRelationInput>;
export const DoctorAddressOrderByWithRelationInputObjectZodSchema = makeSchema();
