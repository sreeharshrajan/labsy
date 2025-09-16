import { z } from 'zod';
import { TenantUserSelectObjectSchema } from './objects/TenantUserSelect.schema';
import { TenantUserUpdateManyMutationInputObjectSchema } from './objects/TenantUserUpdateManyMutationInput.schema';
import { TenantUserWhereInputObjectSchema } from './objects/TenantUserWhereInput.schema';

export const TenantUserUpdateManyAndReturnSchema = z.object({ select: TenantUserSelectObjectSchema.optional(), data: TenantUserUpdateManyMutationInputObjectSchema, where: TenantUserWhereInputObjectSchema.optional()  }).strict()