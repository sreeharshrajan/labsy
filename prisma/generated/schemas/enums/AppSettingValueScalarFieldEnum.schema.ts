import { z } from 'zod';

export const AppSettingValueScalarFieldEnumSchema = z.enum(['id', 'settingId', 'value', 'createdAt', 'updatedAt', 'deletedAt'])

export type AppSettingValueScalarFieldEnum = z.infer<typeof AppSettingValueScalarFieldEnumSchema>;