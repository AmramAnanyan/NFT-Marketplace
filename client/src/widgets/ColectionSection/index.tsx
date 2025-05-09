// @ts-nocheck
import ColectionCart from 'shared/ui/ColectionCart';
import LayoutForSection from 'shared/ui/LoyautForSection';
interface IColection {
  id: string;
  colectionName: string;
  colectionImages: Array<any>;
  userName: IUser['name'];
  userImage: IUser['image'];
}

const colectData: IColection = {
  id: 'id',
  colectionName: 'name',
  colectionImages: [
    { id: '1', url: '../name' },
    { id: '2', url: '../name' },
    { id: '3', url: '../name' },
    { id: '4', url: '../name' }
  ],
  userName: 'user',
  userImage: '../userimage'
};
const ColectionSection = () => {
  return (
    <LayoutForSection>
      <ColectionCart {...colectData} />
      <ColectionCart {...colectData} />
      <ColectionCart {...colectData} />
    </LayoutForSection>
  );
};

export default ColectionSection;

{
  /* <div className={styles.headingWrraper}>
<h2>Trending Collection</h2>
<h4>Checkout Our Weekly Updated Trending Collection.</h4>
</div>
<div className={styles.colectionSection}>
<ColectionCart {...colectData} />
<ColectionCart {...colectData} />
<ColectionCart {...colectData} />
</div> */
}
