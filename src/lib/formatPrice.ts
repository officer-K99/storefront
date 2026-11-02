const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const formatPrice = (priceCents: number): string =>
  formatter.format(priceCents / 100);
