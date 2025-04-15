import CategoryCard from 'shared/ui/CategoryCart';
import styles from './index.module.scss';
import LoyautForSection from 'shared/ui/LoyautForSection';

const BrowseCategory = () => {
  return (
    <LoyautForSection>
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </LoyautForSection>
  );
};

export default BrowseCategory;
