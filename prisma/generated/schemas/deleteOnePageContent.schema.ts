import { z } from 'zod';
import { PageContentSelectObjectSchema } from './objects/PageContentSelect.schema';
import { PageContentIncludeObjectSchema } from './objects/PageContentInclude.schema';
import { PageContentWhereUniqueInputObjectSchema } from './objects/PageContentWhereUniqueInput.schema';

export const PageContentDeleteOneSchema = z.object({ select: PageContentSelectObjectSchema.optional(), include: PageContentIncludeObjectSchema.optional(), where: PageContentWhereUniqueInputObjectSchema  })