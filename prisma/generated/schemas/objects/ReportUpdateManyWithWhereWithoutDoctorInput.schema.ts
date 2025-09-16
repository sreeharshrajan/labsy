import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ReportScalarWhereInputObjectSchema } from './ReportScalarWhereInput.schema';
import { ReportUpdateManyMutationInputObjectSchema } from './ReportUpdateManyMutationInput.schema';
import { ReportUncheckedUpdateManyWithoutDoctorInputObjectSchema } from './ReportUncheckedUpdateManyWithoutDoctorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ReportScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ReportUpdateManyMutationInputObjectSchema), z.lazy(() => ReportUncheckedUpdateManyWithoutDoctorInputObjectSchema)])
}).strict();
export const ReportUpdateManyWithWhereWithoutDoctorInputObjectSchema: z.ZodType<Prisma.ReportUpdateManyWithWhereWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportUpdateManyWithWhereWithoutDoctorInput>;
export const ReportUpdateManyWithWhereWithoutDoctorInputObjectZodSchema = makeSchema();
