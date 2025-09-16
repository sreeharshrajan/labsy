import { z } from 'zod';
import { TenantSelectObjectSchema } from './objects/TenantSelect.schema';
import { TenantUpdateManyMutationInputObjectSchema } from './objects/TenantUpdateManyMutationInput.schema';
import { TenantWhereInputObjectSchema } from './objects/TenantWhereInput.schema';

export const TenantUpdateManyAndReturnSchema = z.object({ select: TenantSelectObjectSchema.optional(), data: TenantUpdateManyMutationInputObjectSchema, where: TenantWhereInputObjectSchema.optional()  }).strict()