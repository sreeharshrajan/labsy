import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuditLogWhereUniqueInputObjectSchema } from './AuditLogWhereUniqueInput.schema';
import { AuditLogUpdateWithoutUserInputObjectSchema } from './AuditLogUpdateWithoutUserInput.schema';
import { AuditLogUncheckedUpdateWithoutUserInputObjectSchema } from './AuditLogUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AuditLogWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AuditLogUpdateWithoutUserInputObjectSchema), z.lazy(() => AuditLogUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const AuditLogUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.AuditLogUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogUpdateWithWhereUniqueWithoutUserInput>;
export const AuditLogUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
