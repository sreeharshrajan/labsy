import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  name: z.string(),
  slug: z.string(),
  tenantId: z.string()
}).strict();
export const ServiceCategoryUncheckedCreateWithoutServicesInputObjectSchema: z.ZodType<Prisma.ServiceCategoryUncheckedCreateWithoutServicesInput> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryUncheckedCreateWithoutServicesInput>;
export const ServiceCategoryUncheckedCreateWithoutServicesInputObjectZodSchema = makeSchema();
