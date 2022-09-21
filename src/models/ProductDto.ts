export class ProductDto {
  id: number | null;
  name: string;
  price: number;
  description: string;
  ingredients: string[];
  image: string;
  spicy: number;
  promo: boolean;

  public constructor(product?: ProductDto) {
    this.id = product?.id ?? null;
    this.name = product?.name ?? '';
    this.price = product?.price ?? 0;
    this.description = product?.description ?? '';
    this.ingredients = product?.ingredients ?? [];
    this.image = product?.image ?? '';
    this.spicy = product?.spicy ?? 0;
    this.promo = product?.promo ?? false;
  }
}