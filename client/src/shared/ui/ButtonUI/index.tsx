import { SpikeRollLoader } from '../NavBar/Loaders'
import styles from './index.module.scss'
export interface IButtonUI {
  classN?: string
  isLoading: boolean
  text: string
  type?: 'submit' | 'reset' | undefined
  leftIconSrc?: string
  rightIconSrc?: string
}
const ButtonUI = ({
  isLoading = false,
  leftIconSrc,
  text,
  type,
  rightIconSrc = '',
  classN
}: IButtonUI) => {
  return (
    <button className={`${styles.buttonContainer} ${classN}`} type={type}>
      {isLoading ? (
        <SpikeRollLoader />
      ) : (
        <>
          {leftIconSrc && <img src={leftIconSrc} className={styles.leftIcon} />}
          <span className={styles.textWrapper}>{text}</span>
          {rightIconSrc && <span>0</span>}
        </>
      )}
    </button>
  )
}

export default ButtonUI
