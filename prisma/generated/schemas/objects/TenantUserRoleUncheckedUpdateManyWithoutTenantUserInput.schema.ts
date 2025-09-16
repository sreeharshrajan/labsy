import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  roleId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const TenantUserRoleUncheckedUpdateManyWithoutTenantUserInputObjectSchema: z.ZodType<Prisma.TenantUserRoleUncheckedUpdateManyWithoutTenantUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUserRoleUncheckedUpdateManyWithoutTenantUserInput>;
export const TenantUserRoleUncheckedUpdateManyWithoutTenantUserInputObjectZodSchema = makeSchema();
