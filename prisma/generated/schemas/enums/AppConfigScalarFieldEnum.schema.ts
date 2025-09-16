import { z } from 'zod';

export const AppConfigScalarFieldEnumSchema = z.enum(['id', 'appName', 'appVersion', 'appLogo', 'appIcon', 'appBanner', 'appDescription', 'appKeywords', 'appAuthor', 'appAuthorEmail', 'appAuthorUrl', 'appCopyright', 'createdAt', 'updatedAt'])

export type AppConfigScalarFieldEnum = z.infer<typeof AppConfigScalarFieldEnumSchema>;