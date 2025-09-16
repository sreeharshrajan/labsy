import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
} from "@/server/api/trpc";
import { withRLSContext, extractRLSContextFromSession } from "@/server/rls";

export const tenantRouter = createTRPCRouter({
  // Get current tenant information
  getCurrentTenant: protectedProcedure.query(async ({ ctx }) => {
    const rlsContext = extractRLSContextFromSession(ctx.session);
    if (!rlsContext) {
      throw new Error("Invalid session context");
    }

    return withRLSContext(rlsContext, async () => {
      return ctx.db.tenant.findUnique({
        where: { id: rlsContext.tenantId },
        include: {
          users: {
            include: {
              user: true,
              tenantRoles: {
                include: {
                  role: {
                    include: {
                      permissions: true,
                    },
                  },
                },
              },
            },
          },
        },
      });
    });
  }),

  // Get all customers for the current tenant
  getCustomers: protectedProcedure
    .input(z.object({
      page: z.number().min(1).default(1),
      limit: z.number().min(1).max(100).default(10),
      search: z.string().optional(),
    }))
    .query(async ({ ctx, input }) => {
      const rlsContext = extractRLSContextFromSession(ctx.session);
      if (!rlsContext) {
        throw new Error("Invalid session context");
      }

      return withRLSContext(rlsContext, async () => {
        const where = {
          tenantId: rlsContext.tenantId,
          ...(input.search && {
            OR: [
              { name: { contains: input.search, mode: 'insensitive' as const } },
              { email: { contains: input.search, mode: 'insensitive' as const } },
              { phone: { contains: input.search, mode: 'insensitive' as const } },
            ],
          }),
        };

        const [customers, total] = await Promise.all([
          ctx.db.customer.findMany({
            where,
            skip: (input.page - 1) * input.limit,
            take: input.limit,
            orderBy: { createdAt: 'desc' },
            include: {
              customerAddresses: {
                include: {
                  address: true,
                },
              },
            },
          }),
          ctx.db.customer.count({ where }),
        ]);

        return {
          customers,
          total,
          page: input.page,
          limit: input.limit,
          totalPages: Math.ceil(total / input.limit),
        };
      });
    }),

  // Create a new customer
  createCustomer: protectedProcedure
    .input(z.object({
      name: z.string().min(1),
      email: z.string().email().optional(),
      phone: z.string().optional(),
      dateOfBirth: z.date().optional(),
      gender: z.enum(['MALE', 'FEMALE', 'OTHER']).optional(),
      bloodGroup: z.enum(['A_POSITIVE', 'A_NEGATIVE', 'B_POSITIVE', 'B_NEGATIVE', 'AB_POSITIVE', 'AB_NEGATIVE', 'O_POSITIVE', 'O_NEGATIVE']).optional(),
      maritalStatus: z.enum(['SINGLE', 'MARRIED', 'DIVORCED', 'WIDOWED', 'SEPARATED', 'OTHER']).optional(),
      aadharNumber: z.string().optional(),
      panNumber: z.string().optional(),
      passportNumber: z.string().optional(),
      knownAllergies: z.array(z.string()).default([]),
      chronicConditions: z.array(z.string()).default([]),
      medications: z.array(z.string()).default([]),
      address: z.object({
        line1: z.string(),
        line2: z.string().optional(),
        city: z.string(),
        state: z.string(),
        zip: z.string(),
        country: z.string().default('India'),
      }).optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      const rlsContext = extractRLSContextFromSession(ctx.session);
      if (!rlsContext) {
        throw new Error("Invalid session context");
      }

      return withRLSContext(rlsContext, async () => {
        const { address, ...customerData } = input;

        const customer = await ctx.db.customer.create({
          data: {
            ...customerData,
            tenantId: rlsContext.tenantId,
            ...(address && {
              customerAddresses: {
                create: {
                  address: {
                    create: address,
                  },
                },
              },
            }),
          },
          include: {
            customerAddresses: {
              include: {
                address: true,
              },
            },
          },
        });

        return customer;
      });
    }),

  // Get all doctors for the current tenant
  getDoctors: protectedProcedure
    .input(z.object({
      page: z.number().min(1).default(1),
      limit: z.number().min(1).max(100).default(10),
      search: z.string().optional(),
    }))
    .query(async ({ ctx, input }) => {
      const rlsContext = extractRLSContextFromSession(ctx.session);
      if (!rlsContext) {
        throw new Error("Invalid session context");
      }

      return withRLSContext(rlsContext, async () => {
        const where = {
          tenantId: rlsContext.tenantId,
          ...(input.search && {
            OR: [
              { name: { contains: input.search, mode: 'insensitive' as const } },
              { email: { contains: input.search, mode: 'insensitive' as const } },
              { phone: { contains: input.search, mode: 'insensitive' as const } },
              { specialization: { contains: input.search, mode: 'insensitive' as const } },
            ],
          }),
        };

        const [doctors, total] = await Promise.all([
          ctx.db.doctor.findMany({
            where,
            skip: (input.page - 1) * input.limit,
            take: input.limit,
            orderBy: { createdAt: 'desc' },
            include: {
              doctorAddresses: {
                include: {
                  address: true,
                },
              },
            },
          }),
          ctx.db.doctor.count({ where }),
        ]);

        return {
          doctors,
          total,
          page: input.page,
          limit: input.limit,
          totalPages: Math.ceil(total / input.limit),
        };
      });
    }),

  // Get all reports for the current tenant
  getReports: protectedProcedure
    .input(z.object({
      page: z.number().min(1).default(1),
      limit: z.number().min(1).max(100).default(10),
      status: z.enum(['PENDING', 'PROCESSING', 'COMPLETED', 'DELIVERED']).optional(),
      customerId: z.string().optional(),
      doctorId: z.string().optional(),
    }))
    .query(async ({ ctx, input }) => {
      const rlsContext = extractRLSContextFromSession(ctx.session);
      if (!rlsContext) {
        throw new Error("Invalid session context");
      }

      return withRLSContext(rlsContext, async () => {
        const where = {
          tenantId: rlsContext.tenantId,
          ...(input.status && { status: input.status }),
          ...(input.customerId && { customerId: input.customerId }),
          ...(input.doctorId && { doctorId: input.doctorId }),
        };

        const [reports, total] = await Promise.all([
          ctx.db.report.findMany({
            where,
            skip: (input.page - 1) * input.limit,
            take: input.limit,
            orderBy: { createdAt: 'desc' },
            include: {
              customer: true,
              doctor: true,
              invoice: true,
              details: {
                include: {
                  parameter: true,
                },
              },
            },
          }),
          ctx.db.report.count({ where }),
        ]);

        return {
          reports,
          total,
          page: input.page,
          limit: input.limit,
          totalPages: Math.ceil(total / input.limit),
        };
      });
    }),

  // Get tenant statistics
  getStats: protectedProcedure.query(async ({ ctx }) => {
    const rlsContext = extractRLSContextFromSession(ctx.session);
    if (!rlsContext) {
      throw new Error("Invalid session context");
    }

    return withRLSContext(rlsContext, async () => {
      const [
        totalCustomers,
        totalDoctors,
        totalReports,
        pendingReports,
        completedReports,
        totalInvoices,
        totalRevenue,
      ] = await Promise.all([
        ctx.db.customer.count({ where: { tenantId: rlsContext.tenantId } }),
        ctx.db.doctor.count({ where: { tenantId: rlsContext.tenantId } }),
        ctx.db.report.count({ where: { tenantId: rlsContext.tenantId } }),
        ctx.db.report.count({ 
          where: { 
            tenantId: rlsContext.tenantId,
            status: 'PENDING',
          } 
        }),
        ctx.db.report.count({ 
          where: { 
            tenantId: rlsContext.tenantId,
            status: 'COMPLETED',
          } 
        }),
        ctx.db.reportInvoice.count({ where: { tenantId: rlsContext.tenantId } }),
        ctx.db.reportInvoice.aggregate({
          where: { tenantId: rlsContext.tenantId },
          _sum: { netAmount: true },
        }),
      ]);

      return {
        totalCustomers,
        totalDoctors,
        totalReports,
        pendingReports,
        completedReports,
        totalInvoices,
        totalRevenue: totalRevenue._sum.netAmount || 0,
      };
    });
  }),
});
