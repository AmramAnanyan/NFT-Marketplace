import { PROFILE_PAGE_PRODUCTS } from 'shared/constants/productBar';
import ProductFilterBar from 'shared/ui/ProductFilterBar';

const ProductBar = () => {
  const handleSelect = () => {};
  return (
    <ProductFilterBar filters={PROFILE_PAGE_PRODUCTS} onClick={handleSelect} />
  );
};

export default ProductBar;
