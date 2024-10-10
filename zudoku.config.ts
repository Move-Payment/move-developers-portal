import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  page: {
    logoUrl: "/icon.svg",
  },
  topNavigation: [
    { id: "docs", label: "Documentation" },
    { id: "api", label: "API Reference" },
  ],
  sidebar: {
    docs: [
      {
        type: "category",
        label: "Overview",
        items: ["introduction"],
        collapsed: false,
      },
      {
        type: "category",
        label: "Magento Plugin",
        items: [
          "plugins/magento/magento-step1",
          "plugins/magento/magento-step2",
          "plugins/magento/magento-step3",
        ],
        collapsed: false,
      },
      {
        type: "category",
        label: "WooCommerce Plugin",
        items: [
          "plugins/woocommerce/woocommerce-step1",
          "plugins/woocommerce/woocommerce-step2",
          "plugins/woocommerce/woocommerce-step3",
        ],
        collapsed: false,
      },
    ],
  },
  redirects: [{ from: "/", to: "/docs/introduction" }],
  apis: {
    type: "url",
    input: "https://api.aws.movepayment.eu/ecommerce-json",
    navigationId: "api",
  },
  docs: {
    files: "/pages/**/*.{md,mdx}",
  },
};

export default config;
