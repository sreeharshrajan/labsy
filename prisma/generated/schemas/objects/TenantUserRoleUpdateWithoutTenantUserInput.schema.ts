import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { TenantRoleUpdateOneRequiredWithoutTenantUserRoleNestedInputObjectSchema } from './TenantRoleUpdateOneRequiredWithoutTenantUserRoleNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  role: z.lazy(() => TenantRoleUpdateOneRequiredWithoutTenantUserRoleNestedInputObjectSchema).optional()
}).strict();
export const TenantUserRoleUpdateWithoutTenantUserInputObjectSchema: z.ZodType<Prisma.TenantUserRoleUpdateWithoutTenantUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserRoleUpdateWithoutTenantUserInput>;
export const TenantUserRoleUpdateWithoutTenantUserInputObjectZodSchema = makeSchema();
