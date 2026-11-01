import "dotenv/config";
import { prisma } from "../src/server/prisma";

const seeder = async (): Promise<void> => {
  await prisma.product.deleteMany();
  await prisma.product.createMany({
    data: [
      {
        name: "Mechanical Keyboard",
        description: "Tactile switches, compact layout.",
        priceCents: 8999,
        imageUrl: "https://picsum.photos/seed/keyboard/600/400",
      },
      {
        name: "Wireless Mouse",
        description: "Quiet clicks, 70-hour battery.",
        priceCents: 3999,
        imageUrl: "https://picsum.photos/seed/mouse/600/400",
      },
      {
        name: "USB-C Hub",
        description: "HDMI, 3 USB ports, card reader.",
        priceCents: 4999,
        imageUrl: "https://picsum.photos/seed/hub/600/400",
      },
    ],
  });
};

seeder().finally(() => prisma.$disconnect());
