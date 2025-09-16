import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TenantCreateWithoutDoctorInputObjectSchema } from './TenantCreateWithoutDoctorInput.schema';
import { TenantUncheckedCreateWithoutDoctorInputObjectSchema } from './TenantUncheckedCreateWithoutDoctorInput.schema';
import { TenantCreateOrConnectWithoutDoctorInputObjectSchema } from './TenantCreateOrConnectWithoutDoctorInput.schema';
import { TenantUpsertWithoutDoctorInputObjectSchema } from './TenantUpsertWithoutDoctorInput.schema';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantUpdateToOneWithWhereWithoutDoctorInputObjectSchema } from './TenantUpdateToOneWithWhereWithoutDoctorInput.schema';
import { TenantUpdateWithoutDoctorInputObjectSchema } from './TenantUpdateWithoutDoctorInput.schema';
import { TenantUncheckedUpdateWithoutDoctorInputObjectSchema } from './TenantUncheckedUpdateWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TenantCreateWithoutDoctorInputObjectSchema), z.lazy(() => TenantUncheckedCreateWithoutDoctorInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutDoctorInputObjectSchema).optional(),
  upsert: z.lazy(() => TenantUpsertWithoutDoctorInputObjectSchema).optional(),
  connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TenantUpdateToOneWithWhereWithoutDoctorInputObjectSchema), z.lazy(() => TenantUpdateWithoutDoctorInputObjectSchema), z.lazy(() => TenantUncheckedUpdateWithoutDoctorInputObjectSchema)]).optional()
}).strict();
export const TenantUpdateOneRequiredWithoutDoctorNestedInputObjectSchema: z.ZodType<Prisma.TenantUpdateOneRequiredWithoutDoctorNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpdateOneRequiredWithoutDoctorNestedInput>;
export const TenantUpdateOneRequiredWithoutDoctorNestedInputObjectZodSchema = makeSchema();
