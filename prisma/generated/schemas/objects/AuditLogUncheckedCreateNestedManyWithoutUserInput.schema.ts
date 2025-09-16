import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuditLogCreateWithoutUserInputObjectSchema } from './AuditLogCreateWithoutUserInput.schema';
import { AuditLogUncheckedCreateWithoutUserInputObjectSchema } from './AuditLogUncheckedCreateWithoutUserInput.schema';
import { AuditLogCreateOrConnectWithoutUserInputObjectSchema } from './AuditLogCreateOrConnectWithoutUserInput.schema';
import { AuditLogCreateManyUserInputEnvelopeObjectSchema } from './AuditLogCreateManyUserInputEnvelope.schema';
import { AuditLogWhereUniqueInputObjectSchema } from './AuditLogWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AuditLogCreateWithoutUserInputObjectSchema), z.lazy(() => AuditLogCreateWithoutUserInputObjectSchema).array(), z.lazy(() => AuditLogUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => AuditLogUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AuditLogCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => AuditLogCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AuditLogCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AuditLogWhereUniqueInputObjectSchema), z.lazy(() => AuditLogWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AuditLogUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AuditLogUncheckedCreateNestedManyWithoutUserInput>;
export const AuditLogUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
