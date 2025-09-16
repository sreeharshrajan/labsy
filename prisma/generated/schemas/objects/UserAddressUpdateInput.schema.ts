import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutUserAddressesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutUserAddressesNestedInput.schema';
import { AddressUpdateOneRequiredWithoutUserAddressesNestedInputObjectSchema } from './AddressUpdateOneRequiredWithoutUserAddressesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  isPrimary: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutUserAddressesNestedInputObjectSchema).optional(),
  address: z.lazy(() => AddressUpdateOneRequiredWithoutUserAddressesNestedInputObjectSchema).optional()
}).strict();
export const UserAddressUpdateInputObjectSchema: z.ZodType<Prisma.UserAddressUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserAddressUpdateInput>;
export const UserAddressUpdateInputObjectZodSchema = makeSchema();
