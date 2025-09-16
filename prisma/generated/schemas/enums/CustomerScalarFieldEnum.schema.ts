import { z } from 'zod';

export const CustomerScalarFieldEnumSchema = z.enum(['id', 'title', 'name', 'email', 'phone', 'dateOfBirth', 'gender', 'bloodGroup', 'maritalStatus', 'aadharNumber', 'panNumber', 'passportNumber', 'knownAllergies', 'chronicConditions', 'medications', 'createdAt', 'updatedAt', 'deletedAt', 'tenantId'])

export type CustomerScalarFieldEnum = z.infer<typeof CustomerScalarFieldEnumSchema>;