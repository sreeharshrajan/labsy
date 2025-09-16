import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TenantUserOrderByRelationAggregateInputObjectSchema } from './TenantUserOrderByRelationAggregateInput.schema';
import { SessionOrderByRelationAggregateInputObjectSchema } from './SessionOrderByRelationAggregateInput.schema';
import { AccountOrderByRelationAggregateInputObjectSchema } from './AccountOrderByRelationAggregateInput.schema';
import { AuditLogOrderByRelationAggregateInputObjectSchema } from './AuditLogOrderByRelationAggregateInput.schema';
import { UserAddressOrderByRelationAggregateInputObjectSchema } from './UserAddressOrderByRelationAggregateInput.schema';
import { ReportChangeLogOrderByRelationAggregateInputObjectSchema } from './ReportChangeLogOrderByRelationAggregateInput.schema';
import { NotificationOrderByRelationAggregateInputObjectSchema } from './NotificationOrderByRelationAggregateInput.schema';
import { PostOrderByRelationAggregateInputObjectSchema } from './PostOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userTitle: SortOrderSchema.optional(),
  name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  email: SortOrderSchema.optional(),
  image: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  passwordHash: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  phone: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isSuperAdmin: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  dateOfBirth: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  deletedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tenants: z.lazy(() => TenantUserOrderByRelationAggregateInputObjectSchema).optional(),
  sessions: z.lazy(() => SessionOrderByRelationAggregateInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountOrderByRelationAggregateInputObjectSchema).optional(),
  auditLogs: z.lazy(() => AuditLogOrderByRelationAggregateInputObjectSchema).optional(),
  userAddresses: z.lazy(() => UserAddressOrderByRelationAggregateInputObjectSchema).optional(),
  ReportChangeLog: z.lazy(() => ReportChangeLogOrderByRelationAggregateInputObjectSchema).optional(),
  Notification: z.lazy(() => NotificationOrderByRelationAggregateInputObjectSchema).optional(),
  posts: z.lazy(() => PostOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const UserOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserOrderByWithRelationInput>;
export const UserOrderByWithRelationInputObjectZodSchema = makeSchema();
