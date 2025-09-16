import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  tenantUserId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const TenantUserRoleUncheckedUpdateWithoutRoleInputObjectSchema: z.ZodType<Prisma.TenantUserRoleUncheckedUpdateWithoutRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserRoleUncheckedUpdateWithoutRoleInput>;
export const TenantUserRoleUncheckedUpdateWithoutRoleInputObjectZodSchema = makeSchema();
