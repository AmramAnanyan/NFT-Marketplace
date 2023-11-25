import styles from './index.module.scss'
interface IUserOnlineStatus {
  online: boolean
  classN?: string
}
const UserOnlineStatus = ({ online, classN }: IUserOnlineStatus) => {
  return (
    <>
      <span
        title={online ? 'ONLINE' : 'OFFLINE'}
        className={`${online ? styles.online : styles.offline} ${classN}`}
      ></span>
    </>
  )
}

export default UserOnlineStatus
