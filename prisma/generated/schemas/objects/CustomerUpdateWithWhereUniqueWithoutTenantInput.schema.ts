import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema';
import { CustomerUpdateWithoutTenantInputObjectSchema } from './CustomerUpdateWithoutTenantInput.schema';
import { CustomerUncheckedUpdateWithoutTenantInputObjectSchema } from './CustomerUncheckedUpdateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomerWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CustomerUpdateWithoutTenantInputObjectSchema), z.lazy(() => CustomerUncheckedUpdateWithoutTenantInputObjectSchema)])
}).strict();
export const CustomerUpdateWithWhereUniqueWithoutTenantInputObjectSchema: z.ZodType<Prisma.CustomerUpdateWithWhereUniqueWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerUpdateWithWhereUniqueWithoutTenantInput>;
export const CustomerUpdateWithWhereUniqueWithoutTenantInputObjectZodSchema = makeSchema();
