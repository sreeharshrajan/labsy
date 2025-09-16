import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SyncLogScalarWhereInputObjectSchema } from './SyncLogScalarWhereInput.schema';
import { SyncLogUpdateManyMutationInputObjectSchema } from './SyncLogUpdateManyMutationInput.schema';
import { SyncLogUncheckedUpdateManyWithoutTenantInputObjectSchema } from './SyncLogUncheckedUpdateManyWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SyncLogScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SyncLogUpdateManyMutationInputObjectSchema), z.lazy(() => SyncLogUncheckedUpdateManyWithoutTenantInputObjectSchema)])
}).strict();
export const SyncLogUpdateManyWithWhereWithoutTenantInputObjectSchema: z.ZodType<Prisma.SyncLogUpdateManyWithWhereWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.SyncLogUpdateManyWithWhereWithoutTenantInput>;
export const SyncLogUpdateManyWithWhereWithoutTenantInputObjectZodSchema = makeSchema();
