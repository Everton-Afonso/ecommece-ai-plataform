import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const customerType = defineType({
  name: "customer",
  title: "Customer",
  type: "document",
  icon: UserIcon,

  groups: [
    {
      name: "details",
      title: "Customer Details",
      default: true,
    },
    {
      name: "stripe",
      title: "Stripe",
    },
  ],

  fields: [
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      group: "details",
      validation: (rule) => rule.required().error("Email is required"),
    }),

    defineField({
      name: "name",
      title: "Name",
      type: "string",
      group: "details",
      description: "Customer's full name",
    }),

    defineField({
      name: "clerkUserId",
      title: "Clerk User ID",
      type: "string",
      group: "details",
      description: "Clerk user ID for authentication",
    }),

    defineField({
      name: "stripeCustomerId",
      title: "Stripe Customer ID",
      type: "string",
      group: "stripe",
      readOnly: true,
      description: "Stripe customer ID for payments",
      validation: (rule) =>
        rule.required().error("Stripe customer ID is required"),
    }),

    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      group: "details",
      readOnly: true,
      initialValue: () => new Date().toISOString(),
    }),
  ],

  preview: {
    select: {
      email: "email",
      name: "name",
      stripeCustomerId: "stripeCustomerId",
    },
    prepare({ email, name, stripeCustomerId }) {
      return {
        title: name ?? email ?? "Unknown Customer",
        subtitle: stripeCustomerId
          ? `${email ?? ""} • ${stripeCustomerId}`
          : email ?? "",
      };
    },
  },

  orderings: [
    {
      title: "Newest First",
      name: "createdAtDesc",
      by: [{ field: "createdAt", direction: "desc" }],
    },
    {
      title: "Email A–Z",
      name: "emailAsc",
      by: [{ field: "email", direction: "asc" }],
    },
  ],
});
