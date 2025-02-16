import { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';
export interface ITimer {
  title?: string;
  hours: number;
  minutes: number;
  seconds: number;
}
const AuctionTimer = ({ title, hours, minutes, seconds }: ITimer) => {
  const idInterval = useRef<any>(null);
  const [timerState, setTimerState] = useState({
    seconds,
    minutes,
    hours
  });
  const [isClosedAuction, setIsClosedAuction] = useState(false);
  useEffect(() => {
    idInterval.current = setTimeout(() => {
      setTimerState((prevState) => {
        return {
          ...prevState,
          seconds: prevState.seconds--
        };
      });
      if (timerState.hours === 0) {
        setIsClosedAuction(true);
      }
      if (timerState.seconds === 0) {
        setTimerState((prevState) => {
          return {
            ...prevState,
            seconds: 59,
            minutes: prevState.minutes - 1
          };
        });
      }
      if (timerState.minutes === 0) {
        setTimerState((prevState) => {
          return {
            ...prevState,
            minutes: 59,
            hours: prevState.hours - 1
          };
        });
      }
    }, 1000);
    return () => {
      clearInterval(idInterval.current);
    };
  }, [timerState]);

  return (
    <>
      {!isClosedAuction && (
        <div className={styles.timerConteiner}>
          <div className={styles.timerTitle}>Auction End</div>
          <div className={styles.timerItemConteiner}>
            <div className={styles.timerItem}>
              <div>{timerState.hours} : </div>
              <div>Hours</div>
            </div>
            <div className={styles.timerItem}>
              <div>{timerState.minutes} : </div>
              <div>Minutes</div>
            </div>
            <div className={styles.timerItem}>
              <div>{timerState.seconds}</div>
              <div>Seconds</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AuctionTimer;
