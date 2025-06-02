/* eslint-disable @next/next/no-img-element */
import { Button, Card, CardContent } from "@/components/ui";
import { ProductDetail } from "@/context/product-action-context";
import { useProductAction } from "@/hook/use-product-action";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

interface FavoriteItemProps {
  product: ProductDetail;
}

export const FavoriteItem = ({ product }: FavoriteItemProps) => {
  const { id, name, image, price, rating } = product;
  const { toggleFavorite } = useProductAction();
  const router = useRouter();
  const onClickCard = () => {
    router.push(`/product/${id}`);
  };

  const onClickDelete = () => {
    toggleFavorite(id, false);
  };
  return (
    <Card className=" hover:shadow-lg transition-shadow duration-300 p-1 pb-0 flex flex-col gap-0">
      <div className="flex justify-end">
        <Button className="cursor-pointer" variant="ghost" size="icon" onClick={onClickDelete}>
          <Trash2 />
        </Button>
      </div>
      <CardContent onClick={onClickCard} className="px-6 cursor-pointer pb-4">
        <div className="w-full flex justify-center">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className=" h-[150px] object-contain select-none pointer-events-none"
            draggable={false}
          />
        </div>
        <div>{name}</div>
        <div>฿{price.toLocaleString()}</div>
        <div>
          ⭐ {rating.rate} ({rating.count.toLocaleString()})
        </div>
      </CardContent>
    </Card>
  );
};
