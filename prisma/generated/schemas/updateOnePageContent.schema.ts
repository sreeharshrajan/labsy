import { z } from 'zod';
import { PageContentSelectObjectSchema } from './objects/PageContentSelect.schema';
import { PageContentIncludeObjectSchema } from './objects/PageContentInclude.schema';
import { PageContentUpdateInputObjectSchema } from './objects/PageContentUpdateInput.schema';
import { PageContentUncheckedUpdateInputObjectSchema } from './objects/PageContentUncheckedUpdateInput.schema';
import { PageContentWhereUniqueInputObjectSchema } from './objects/PageContentWhereUniqueInput.schema';

export const PageContentUpdateOneSchema = z.object({ select: PageContentSelectObjectSchema.optional(), include: PageContentIncludeObjectSchema.optional(), data: z.union([PageContentUpdateInputObjectSchema, PageContentUncheckedUpdateInputObjectSchema]), where: PageContentWhereUniqueInputObjectSchema  })