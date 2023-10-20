import { useOutletContext } from "react-router-dom";
import Button from "../../../../shared/ui/Button/Button";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../../app/providers/Store/store";

export default function ProductDetailInfo() {
  const product = useOutletContext();
  const dispatch = useDispatch();

  return (
    <>
      <p>
        {product.description} sold at <strong>${product.price}</strong> per
        piece.
      </p>
      <Button onClick={() => dispatch(addProduct(product))}>${product.price}</Button>
    </>
  );
}