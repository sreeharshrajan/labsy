import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppSettingValueScalarWhereInputObjectSchema } from './AppSettingValueScalarWhereInput.schema';
import { AppSettingValueUpdateManyMutationInputObjectSchema } from './AppSettingValueUpdateManyMutationInput.schema';
import { AppSettingValueUncheckedUpdateManyWithoutSettingInputObjectSchema } from './AppSettingValueUncheckedUpdateManyWithoutSettingInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AppSettingValueScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AppSettingValueUpdateManyMutationInputObjectSchema), z.lazy(() => AppSettingValueUncheckedUpdateManyWithoutSettingInputObjectSchema)])
}).strict();
export const AppSettingValueUpdateManyWithWhereWithoutSettingInputObjectSchema: z.ZodType<Prisma.AppSettingValueUpdateManyWithWhereWithoutSettingInput> = makeSchema() as unknown as z.ZodType<Prisma.AppSettingValueUpdateManyWithWhereWithoutSettingInput>;
export const AppSettingValueUpdateManyWithWhereWithoutSettingInputObjectZodSchema = makeSchema();
