import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { TenantUserUpdateManyWithoutTenantNestedInputObjectSchema } from './TenantUserUpdateManyWithoutTenantNestedInput.schema';
import { SubscriptionUpdateManyWithoutTenantNestedInputObjectSchema } from './SubscriptionUpdateManyWithoutTenantNestedInput.schema';
import { AuditLogUpdateManyWithoutTenantNestedInputObjectSchema } from './AuditLogUpdateManyWithoutTenantNestedInput.schema';
import { ServiceCategoryUpdateManyWithoutTenantNestedInputObjectSchema } from './ServiceCategoryUpdateManyWithoutTenantNestedInput.schema';
import { ServiceUpdateManyWithoutTenantNestedInputObjectSchema } from './ServiceUpdateManyWithoutTenantNestedInput.schema';
import { CustomerUpdateManyWithoutTenantNestedInputObjectSchema } from './CustomerUpdateManyWithoutTenantNestedInput.schema';
import { DoctorUpdateManyWithoutTenantNestedInputObjectSchema } from './DoctorUpdateManyWithoutTenantNestedInput.schema';
import { ReportInvoiceUpdateManyWithoutTenantNestedInputObjectSchema } from './ReportInvoiceUpdateManyWithoutTenantNestedInput.schema';
import { ReportTemplateUpdateManyWithoutTenantNestedInputObjectSchema } from './ReportTemplateUpdateManyWithoutTenantNestedInput.schema';
import { TenantAddressUpdateManyWithoutTenantNestedInputObjectSchema } from './TenantAddressUpdateManyWithoutTenantNestedInput.schema';
import { SyncLogUpdateManyWithoutTenantNestedInputObjectSchema } from './SyncLogUpdateManyWithoutTenantNestedInput.schema';
import { TenantRoleUpdateManyWithoutTenantNestedInputObjectSchema } from './TenantRoleUpdateManyWithoutTenantNestedInput.schema';
import { ReportInvoicePaymentUpdateManyWithoutTenantNestedInputObjectSchema } from './ReportInvoicePaymentUpdateManyWithoutTenantNestedInput.schema';
import { NotificationUpdateManyWithoutTenantNestedInputObjectSchema } from './NotificationUpdateManyWithoutTenantNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  slug: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  labLicenseNumber: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  contactEmail: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  contactPhone: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  gstin: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  isActive: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deletedAt: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  canManageRoles: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  maxCustomRoles: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  maxUsers: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  users: z.lazy(() => TenantUserUpdateManyWithoutTenantNestedInputObjectSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionUpdateManyWithoutTenantNestedInputObjectSchema).optional(),
  auditLogs: z.lazy(() => AuditLogUpdateManyWithoutTenantNestedInputObjectSchema).optional(),
  ServiceCategory: z.lazy(() => ServiceCategoryUpdateManyWithoutTenantNestedInputObjectSchema).optional(),
  Service: z.lazy(() => ServiceUpdateManyWithoutTenantNestedInputObjectSchema).optional(),
  Customer: z.lazy(() => CustomerUpdateManyWithoutTenantNestedInputObjectSchema).optional(),
  Doctor: z.lazy(() => DoctorUpdateManyWithoutTenantNestedInputObjectSchema).optional(),
  ReportInvoice: z.lazy(() => ReportInvoiceUpdateManyWithoutTenantNestedInputObjectSchema).optional(),
  ReportTemplate: z.lazy(() => ReportTemplateUpdateManyWithoutTenantNestedInputObjectSchema).optional(),
  tenantAddresses: z.lazy(() => TenantAddressUpdateManyWithoutTenantNestedInputObjectSchema).optional(),
  SyncLog: z.lazy(() => SyncLogUpdateManyWithoutTenantNestedInputObjectSchema).optional(),
  Roles: z.lazy(() => TenantRoleUpdateManyWithoutTenantNestedInputObjectSchema).optional(),
  ReportInvoicePayment: z.lazy(() => ReportInvoicePaymentUpdateManyWithoutTenantNestedInputObjectSchema).optional(),
  Notification: z.lazy(() => NotificationUpdateManyWithoutTenantNestedInputObjectSchema).optional()
}).strict();
export const TenantUpdateWithoutReportInputObjectSchema: z.ZodType<Prisma.TenantUpdateWithoutReportInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUpdateWithoutReportInput>;
export const TenantUpdateWithoutReportInputObjectZodSchema = makeSchema();
