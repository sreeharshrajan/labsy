import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { AddressOrderByWithRelationInputObjectSchema } from './AddressOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  addressId: SortOrderSchema.optional(),
  isPrimary: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  address: z.lazy(() => AddressOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const UserAddressOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UserAddressOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAddressOrderByWithRelationInput>;
export const UserAddressOrderByWithRelationInputObjectZodSchema = makeSchema();
