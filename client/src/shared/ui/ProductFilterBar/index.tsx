import { FC, useState } from 'react';
import styles from './index.module.scss';
import { SELECTED_TAB } from 'shared/constants/productBar';

export interface IProductFilter {
  id: number;
  selector: string;
}
interface IProductFilterBar {
  filters: IProductFilter[];
  onClick(arg: IProductFilter): void;
}
const ProductFilterBar: FC<IProductFilterBar> = ({ filters, onClick }) => {
  const [selected, setSelected] = useState({
    isSelected: false,
    id: SELECTED_TAB.ONE
  });
  const handleSelect = (item: any) => {
    onClick(item);
    setSelected({ id: item.id, isSelected: !selected.isSelected });
  };
  return (
    <div className={styles.filter_products}>
      {filters.map((item) => {
        return (
          <div
            key={item.id}
            className={`${styles.category_button} ${
              item.id === selected.id ? styles.selected_category : ''
            }`}
            onClick={() => handleSelect(item)}
          >
            {item.selector}
          </div>
        );
      })}
    </div>
  );
};

export default ProductFilterBar;
