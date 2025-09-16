import { z } from 'zod';
import { PageContentSelectObjectSchema } from './objects/PageContentSelect.schema';
import { PageContentIncludeObjectSchema } from './objects/PageContentInclude.schema';
import { PageContentCreateInputObjectSchema } from './objects/PageContentCreateInput.schema';
import { PageContentUncheckedCreateInputObjectSchema } from './objects/PageContentUncheckedCreateInput.schema';

export const PageContentCreateOneSchema = z.object({ select: PageContentSelectObjectSchema.optional(), include: PageContentIncludeObjectSchema.optional(), data: z.union([PageContentCreateInputObjectSchema, PageContentUncheckedCreateInputObjectSchema])  })