import { z } from 'zod';

// prettier-ignore
export const TenantInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string(),
    labLicenseNumber: z.string().optional().nullable(),
    contactEmail: z.string(),
    contactPhone: z.string().optional().nullable(),
    gstin: z.string().optional().nullable(),
    isActive: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().optional().nullable(),
    canManageRoles: z.boolean(),
    maxCustomRoles: z.number().int(),
    maxUsers: z.number().int(),
    users: z.array(z.unknown()),
    subscriptions: z.array(z.unknown()),
    auditLogs: z.array(z.unknown()),
    ServiceCategory: z.array(z.unknown()),
    Service: z.array(z.unknown()),
    Customer: z.array(z.unknown()),
    Doctor: z.array(z.unknown()),
    ReportInvoice: z.array(z.unknown()),
    Report: z.array(z.unknown()),
    ReportTemplate: z.array(z.unknown()),
    tenantAddresses: z.array(z.unknown()),
    SyncLog: z.array(z.unknown()),
    Roles: z.array(z.unknown()),
    ReportInvoicePayment: z.array(z.unknown()),
    Notification: z.array(z.unknown())
}).strict();

export type TenantInputType = z.infer<typeof TenantInputSchema>;
