import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TenantAddressOrderByRelationAggregateInputObjectSchema } from './TenantAddressOrderByRelationAggregateInput.schema';
import { UserAddressOrderByRelationAggregateInputObjectSchema } from './UserAddressOrderByRelationAggregateInput.schema';
import { CustomerAddressOrderByRelationAggregateInputObjectSchema } from './CustomerAddressOrderByRelationAggregateInput.schema';
import { DoctorAddressOrderByRelationAggregateInputObjectSchema } from './DoctorAddressOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  line1: SortOrderSchema.optional(),
  line2: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  city: SortOrderSchema.optional(),
  state: SortOrderSchema.optional(),
  zip: SortOrderSchema.optional(),
  country: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  tenantAddresses: z.lazy(() => TenantAddressOrderByRelationAggregateInputObjectSchema).optional(),
  userAddresses: z.lazy(() => UserAddressOrderByRelationAggregateInputObjectSchema).optional(),
  customerAddresses: z.lazy(() => CustomerAddressOrderByRelationAggregateInputObjectSchema).optional(),
  doctorAddresses: z.lazy(() => DoctorAddressOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const AddressOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AddressOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AddressOrderByWithRelationInput>;
export const AddressOrderByWithRelationInputObjectZodSchema = makeSchema();
