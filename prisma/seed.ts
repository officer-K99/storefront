import "dotenv/config";
import type { Prisma } from "../src/generated/prisma/client";
import { prisma } from "../src/server/prisma";

const products = [
  {
    name: "Mechanical Keyboard",
    description: "Tactile switches, compact layout.",
    priceCents: 8999,
    imageUrl: "/images/products/keyboard.svg",
  },
  {
    name: "Wireless Mouse",
    description: "Quiet clicks, 70-hour battery.",
    priceCents: 3999,
    imageUrl: "/images/products/mouse.svg",
  },
  {
    name: "USB-C Hub",
    description: "HDMI, 3 USB ports, card reader.",
    priceCents: 4999,
    imageUrl: "/images/products/usb-c-hub.svg",
  },
  {
    name: "Aluminum Laptop Stand",
    description: "Raises your screen to eye level, folds flat.",
    priceCents: 3499,
    imageUrl: "/images/products/laptop-stand.svg",
  },
  {
    name: "Noise-Cancelling Headphones",
    description: "Over-ear, 30-hour battery, built-in microphone.",
    priceCents: 14999,
    imageUrl: "/images/products/headphones.svg",
  },
  {
    name: "Portable SSD 1TB",
    description: "Pocket-sized, fast USB-C transfers.",
    priceCents: 9999,
    imageUrl: "/images/products/portable-ssd.svg",
  },
] satisfies Prisma.ProductCreateManyInput[];

const seeder = async (): Promise<void> => {
  await prisma.product.deleteMany();
  await prisma.product.createMany({
    data: products,
  });
};

seeder().finally(() => prisma.$disconnect());
