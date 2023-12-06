import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
export interface ITimer {
  title?: string
  hours: number
  minutes: number
  seconds: number
}
const AuctionTimer = ({ title, hours, minutes, seconds }: ITimer) => {
  const [taimerState, setTimerState] = useState({ seconds: seconds })
  useEffect(() => {
    let idInterval = setInterval(() => {
      setTimerState({ seconds: taimerState.seconds-- })
      if (taimerState.seconds === 0) {
      }
      console.log(taimerState, 'timer state')
    }, 1000)
    return () => {
      clearInterval(idInterval)
    }
  }, [])

  return (
    <div className={styles.timerConteiner}>
      <div className={styles.timerTitle}>Auction End</div>
      <div className={styles.timerItemConteiner}>
        <div className={styles.timerItem}>
          <div>{hours} : </div>
          <div>Hours</div>
        </div>
        <div className={styles.timerItem}>
          <div>{minutes} : </div>
          <div>Minutes</div>
        </div>
        <div className={styles.timerItem}>
          <div>{seconds}</div>
          <div>Seconds</div>
        </div>
      </div>
    </div>
  )
}

export default AuctionTimer
