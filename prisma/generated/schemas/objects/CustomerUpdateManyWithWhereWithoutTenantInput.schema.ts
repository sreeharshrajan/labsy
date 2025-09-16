import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerScalarWhereInputObjectSchema } from './CustomerScalarWhereInput.schema';
import { CustomerUpdateManyMutationInputObjectSchema } from './CustomerUpdateManyMutationInput.schema';
import { CustomerUncheckedUpdateManyWithoutTenantInputObjectSchema } from './CustomerUncheckedUpdateManyWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomerScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CustomerUpdateManyMutationInputObjectSchema), z.lazy(() => CustomerUncheckedUpdateManyWithoutTenantInputObjectSchema)])
}).strict();
export const CustomerUpdateManyWithWhereWithoutTenantInputObjectSchema: z.ZodType<Prisma.CustomerUpdateManyWithWhereWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerUpdateManyWithWhereWithoutTenantInput>;
export const CustomerUpdateManyWithWhereWithoutTenantInputObjectZodSchema = makeSchema();
