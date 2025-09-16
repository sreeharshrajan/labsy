import { z } from 'zod';
import { PageContentSelectObjectSchema } from './objects/PageContentSelect.schema';
import { PageContentIncludeObjectSchema } from './objects/PageContentInclude.schema';
import { PageContentWhereUniqueInputObjectSchema } from './objects/PageContentWhereUniqueInput.schema';
import { PageContentCreateInputObjectSchema } from './objects/PageContentCreateInput.schema';
import { PageContentUncheckedCreateInputObjectSchema } from './objects/PageContentUncheckedCreateInput.schema';
import { PageContentUpdateInputObjectSchema } from './objects/PageContentUpdateInput.schema';
import { PageContentUncheckedUpdateInputObjectSchema } from './objects/PageContentUncheckedUpdateInput.schema';

export const PageContentUpsertSchema = z.object({ select: PageContentSelectObjectSchema.optional(), include: PageContentIncludeObjectSchema.optional(), where: PageContentWhereUniqueInputObjectSchema, create: z.union([ PageContentCreateInputObjectSchema, PageContentUncheckedCreateInputObjectSchema ]), update: z.union([ PageContentUpdateInputObjectSchema, PageContentUncheckedUpdateInputObjectSchema ])  })