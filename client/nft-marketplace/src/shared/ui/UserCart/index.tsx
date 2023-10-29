import UserOnlineStatus from '../UserOnlineStatus'
import styles from './index.module.scss'
import { IUser } from 'shared/types'
interface IUserCart {
  id: IUser['id']
  index?: number
  name: IUser['name']
  image: IUser['image']
  totalSales: IUser['totalSales']
  active?: boolean
}
const userData: IUserCart = {
  id: '1',
  index: 1,
  name: 'Hamo',
  image:
    'https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-89@2x.png',
  totalSales: '35.45 ETH',
  active: true
}
const UserCart = () => {
  return (
    <div className={styles.conteiner}>
      <span className={styles.rank}>{userData.index}</span>
      {userData.active && (
        <UserOnlineStatus classN={styles.pulse} online={false} />
      )}
      <div
        className={styles.avatar}
        style={{ backgroundImage: `url(${userData.image})` }}
      ></div>

      <h5>{userData.name}</h5>

      <p>
        Total Sales: <span>{userData.totalSales}</span>
      </p>
    </div>
  )
}

export default UserCart
