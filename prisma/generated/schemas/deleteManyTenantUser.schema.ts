import { z } from 'zod';
import { TenantUserWhereInputObjectSchema } from './objects/TenantUserWhereInput.schema';

export const TenantUserDeleteManySchema = z.object({ where: TenantUserWhereInputObjectSchema.optional()  })