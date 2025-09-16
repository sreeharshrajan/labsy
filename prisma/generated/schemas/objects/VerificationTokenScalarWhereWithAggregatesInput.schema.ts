import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const verificationtokenscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  identifier: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  expires: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  token: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const VerificationTokenScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.VerificationTokenScalarWhereWithAggregatesInput> = verificationtokenscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.VerificationTokenScalarWhereWithAggregatesInput>;
export const VerificationTokenScalarWhereWithAggregatesInputObjectZodSchema = verificationtokenscalarwherewithaggregatesinputSchema;
