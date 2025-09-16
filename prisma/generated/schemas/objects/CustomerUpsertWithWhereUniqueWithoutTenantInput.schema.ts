import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema';
import { CustomerUpdateWithoutTenantInputObjectSchema } from './CustomerUpdateWithoutTenantInput.schema';
import { CustomerUncheckedUpdateWithoutTenantInputObjectSchema } from './CustomerUncheckedUpdateWithoutTenantInput.schema';
import { CustomerCreateWithoutTenantInputObjectSchema } from './CustomerCreateWithoutTenantInput.schema';
import { CustomerUncheckedCreateWithoutTenantInputObjectSchema } from './CustomerUncheckedCreateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomerWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CustomerUpdateWithoutTenantInputObjectSchema), z.lazy(() => CustomerUncheckedUpdateWithoutTenantInputObjectSchema)]),
  create: z.union([z.lazy(() => CustomerCreateWithoutTenantInputObjectSchema), z.lazy(() => CustomerUncheckedCreateWithoutTenantInputObjectSchema)])
}).strict();
export const CustomerUpsertWithWhereUniqueWithoutTenantInputObjectSchema: z.ZodType<Prisma.CustomerUpsertWithWhereUniqueWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerUpsertWithWhereUniqueWithoutTenantInput>;
export const CustomerUpsertWithWhereUniqueWithoutTenantInputObjectZodSchema = makeSchema();
