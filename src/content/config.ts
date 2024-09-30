import { defineCollection, z } from "astro:content";

// Post collection schema
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
    author: z.string().default("Admin"),
    author_image: z.string().default("/images/blog/avatar.png").optional(),
    categories: z.array(z.string()).default(["others"]),
    tags: z.array(z.string()).default(["others"]),
    draft: z.boolean().optional(),
  }),
});

// Author collection schema
const authorsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    email: z.string().optional(),
    image: z.string().optional(),
    description: z.string().optional(),
    social: z
      .array(
        z
          .object({
            name: z.string().optional(),
            icon: z.string().optional(),
            link: z.string().optional(),
          })
          .optional(),
      )
      .optional(),
    draft: z.boolean().optional(),
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

const homePageCollection = defineCollection({
  schema: z.object({
    // Banner Section
    banner: z.object({
      title: z.string(),
      content: z.string(),
      badge: z.string(),
      image: z.string(),
      button: z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }),
      video_button: z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }),
    }),

    // Brands Section
    brands: z.object({
      enable: z.boolean(),
      title: z.string(),
      logos: z.array(
        z.object({
          image: z.string(),
        }),
      ),
    }),

    // Experience Section
    experience: z.object({
      enable: z.boolean(),
      title: z.string(),
      description: z.string(),
      image: z.string(),
      items: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          icon: z.string(),
        }),
      ),
      counter: z.object({
        enable: z.boolean(),
        stats: z.array(
          z.object({
            title: z.string(),
            value: z.number(),
            suffix: z.string(),
          }),
        ),
      }),
    }),
  }),
});

const faqPageCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    meta_title: z.string().optional(),
    accordion: z.object({
      enable: z.boolean(),
      items: z.array(
        z.object({
          accordion_header: z.string(),
          accordion_content: z.string(),
        }),
      ),
    }),
  }),
});

const testimonialsCollection = defineCollection({
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    description: z.string(),
    testimonials: z.array(
      z.object({
        name: z.string(),
        designation: z.string(),
        avatar: z.string(),
        content: z.string(),
      }),
    ),
  }),
});

const callToActionCollection = defineCollection({
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    description: z.string(),
    button: z.object({
      enable: z.boolean(),
      label: z.string(),
      link: z.string(),
    }),
  }),
});

const featuresCollection = defineCollection({
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    description: z.string(),
    features: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string(),
      }),
    ),
  }),
});

const featuresPageCollection = defineCollection({
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    meta_title: z.string().optional(),
    meta_description: z.string().optional(),
    description: z.string().optional(),
    feature_items: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
        lists: z.array(z.string()).optional(),
        button: z
          .object({
            enable: z.boolean(),
            label: z.string(),
            link: z.string(),
          })
          .optional(),
        items: z
          .array(
            z.object({
              title: z.string(),
              description: z.string(),
            }),
          )
          .optional(),
      }),
    ),
  }),
});

const pricingPageCollection = defineCollection({
  schema: z.object({
    pricing: z.object({
      enable: z.boolean(),
      title: z.string(),
      pricing_tabs: z.object({
        monthly: z.string(),
        annually: z.string(),
        discounts: z.object({
          enable: z.boolean(),
          discount: z.number(),
        }),
      }),
      pricing_tables: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          prefix: z.string(),
          monthly_price: z.number(),
          annually_price: z.number(),
          popular: z.boolean(),
          button: z.object({
            enable: z.boolean(),
            label: z.string(),
            link: z.string(),
          }),
          features: z.object({
            title: z.string(),
            list: z.array(z.string()),
            button: z.object({
              enable: z.boolean(),
              label: z.string(),
              link: z.string(),
            }),
          }),
        }),
      ),
    }),
    pricing_table_data: z.object({
      enable: z.boolean(),
      title: z.string(),
      tableHead: z.object({
        name: z.string(),
        free: z.string(),
        basic: z.string(),
        pro: z.string(),
      }),
      tableBody: z.array(
        z.object({
          name: z.string(),
          info: z.string(),
          free: z.string(),
          basic: z.string(),
          pro: z.string(),
        }),
      ),
      tableFooter: z.object({
        free: z.string(),
        basic: z.string(),
        pro: z.string(),
      }),
    }),
  }),
});

// Export collections
export const collections = {
  home: homePageCollection,
  faq: faqPageCollection,
  testimonials: testimonialsCollection,
  callToAction: callToActionCollection,
  blog: blogCollection,
  authors: authorsCollection,
  pages: pagesCollection,
  features: featuresPageCollection,
  pricing: pricingPageCollection,
};
