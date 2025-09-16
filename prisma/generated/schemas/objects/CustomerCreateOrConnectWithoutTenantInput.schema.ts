import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema';
import { CustomerCreateWithoutTenantInputObjectSchema } from './CustomerCreateWithoutTenantInput.schema';
import { CustomerUncheckedCreateWithoutTenantInputObjectSchema } from './CustomerUncheckedCreateWithoutTenantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CustomerWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CustomerCreateWithoutTenantInputObjectSchema), z.lazy(() => CustomerUncheckedCreateWithoutTenantInputObjectSchema)])
}).strict();
export const CustomerCreateOrConnectWithoutTenantInputObjectSchema: z.ZodType<Prisma.CustomerCreateOrConnectWithoutTenantInput> = makeSchema() as unknown as z.ZodType<Prisma.CustomerCreateOrConnectWithoutTenantInput>;
export const CustomerCreateOrConnectWithoutTenantInputObjectZodSchema = makeSchema();
