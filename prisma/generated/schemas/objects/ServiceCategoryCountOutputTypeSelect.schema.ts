import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  services: z.boolean().optional()
}).strict();
export const ServiceCategoryCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ServiceCategoryCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ServiceCategoryCountOutputTypeSelect>;
export const ServiceCategoryCountOutputTypeSelectObjectZodSchema = makeSchema();
