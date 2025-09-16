import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { TenantUserUncheckedUpdateManyWithoutTenantNestedInputObjectSchema } from './TenantUserUncheckedUpdateManyWithoutTenantNestedInput.schema';
import { SubscriptionUncheckedUpdateManyWithoutTenantNestedInputObjectSchema } from './SubscriptionUncheckedUpdateManyWithoutTenantNestedInput.schema';
import { AuditLogUncheckedUpdateManyWithoutTenantNestedInputObjectSchema } from './AuditLogUncheckedUpdateManyWithoutTenantNestedInput.schema';
import { ServiceCategoryUncheckedUpdateManyWithoutTenantNestedInputObjectSchema } from './ServiceCategoryUncheckedUpdateManyWithoutTenantNestedInput.schema';
import { ServiceUncheckedUpdateManyWithoutTenantNestedInputObjectSchema } from './ServiceUncheckedUpdateManyWithoutTenantNestedInput.schema';
import { CustomerUncheckedUpdateManyWithoutTenantNestedInputObjectSchema } from './CustomerUncheckedUpdateManyWithoutTenantNestedInput.schema';
import { ReportInvoiceUncheckedUpdateManyWithoutTenantNestedInputObjectSchema } from './ReportInvoiceUncheckedUpdateManyWithoutTenantNestedInput.schema';
import { ReportUncheckedUpdateManyWithoutTenantNestedInputObjectSchema } from './ReportUncheckedUpdateManyWithoutTenantNestedInput.schema';
import { ReportTemplateUncheckedUpdateManyWithoutTenantNestedInputObjectSchema } from './ReportTemplateUncheckedUpdateManyWithoutTenantNestedInput.schema';
import { TenantAddressUncheckedUpdateManyWithoutTenantNestedInputObjectSchema } from './TenantAddressUncheckedUpdateManyWithoutTenantNestedInput.schema';
import { SyncLogUncheckedUpdateManyWithoutTenantNestedInputObjectSchema } from './SyncLogUncheckedUpdateManyWithoutTenantNestedInput.schema';
import { TenantRoleUncheckedUpdateManyWithoutTenantNestedInputObjectSchema } from './TenantRoleUncheckedUpdateManyWithoutTenantNestedInput.schema';
import { ReportInvoicePaymentUncheckedUpdateManyWithoutTenantNestedInputObjectSchema } from './ReportInvoicePaymentUncheckedUpdateManyWithoutTenantNestedInput.schema';
import { NotificationUncheckedUpdateManyWithoutTenantNestedInputObjectSchema } from './NotificationUncheckedUpdateManyWithoutTenantNestedInput.schema'

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
  users: z.lazy(() => TenantUserUncheckedUpdateManyWithoutTenantNestedInputObjectSchema).optional(),
  subscriptions: z.lazy(() => SubscriptionUncheckedUpdateManyWithoutTenantNestedInputObjectSchema).optional(),
  auditLogs: z.lazy(() => AuditLogUncheckedUpdateManyWithoutTenantNestedInputObjectSchema).optional(),
  ServiceCategory: z.lazy(() => ServiceCategoryUncheckedUpdateManyWithoutTenantNestedInputObjectSchema).optional(),
  Service: z.lazy(() => ServiceUncheckedUpdateManyWithoutTenantNestedInputObjectSchema).optional(),
  Customer: z.lazy(() => CustomerUncheckedUpdateManyWithoutTenantNestedInputObjectSchema).optional(),
  ReportInvoice: z.lazy(() => ReportInvoiceUncheckedUpdateManyWithoutTenantNestedInputObjectSchema).optional(),
  Report: z.lazy(() => ReportUncheckedUpdateManyWithoutTenantNestedInputObjectSchema).optional(),
  ReportTemplate: z.lazy(() => ReportTemplateUncheckedUpdateManyWithoutTenantNestedInputObjectSchema).optional(),
  tenantAddresses: z.lazy(() => TenantAddressUncheckedUpdateManyWithoutTenantNestedInputObjectSchema).optional(),
  SyncLog: z.lazy(() => SyncLogUncheckedUpdateManyWithoutTenantNestedInputObjectSchema).optional(),
  Roles: z.lazy(() => TenantRoleUncheckedUpdateManyWithoutTenantNestedInputObjectSchema).optional(),
  ReportInvoicePayment: z.lazy(() => ReportInvoicePaymentUncheckedUpdateManyWithoutTenantNestedInputObjectSchema).optional(),
  Notification: z.lazy(() => NotificationUncheckedUpdateManyWithoutTenantNestedInputObjectSchema).optional()
}).strict();
export const TenantUncheckedUpdateWithoutDoctorInputObjectSchema: z.ZodType<Prisma.TenantUncheckedUpdateWithoutDoctorInput> = makeSchema() as unknown as z.ZodType<Prisma.TenantUncheckedUpdateWithoutDoctorInput>;
export const TenantUncheckedUpdateWithoutDoctorInputObjectZodSchema = makeSchema();
