import {
  FC,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState
} from 'react';
import Toast from './toast';
import { TOAST_MESSAGES } from './utils';
import Success from './success';
import Error from './error';
const renderByStatus = (status: string, message: string) => {
  console.log(status, 'status hahah');
  switch (status) {
    case TOAST_MESSAGES.SUCCESS:
      return <Success message={message} />;
    case TOAST_MESSAGES.ERROR:
      return <Error message={message} />;
    default:
      return <></>;
  }
};
const ToastProvider: FC<{ children: any }> = ({ children }) => {
  const timeoutRef = useRef<any>(0);
  const [openTost, setOpenTost] = useState<null | {
    type: TOAST_MESSAGES;
    message: string;
  }>(null);

  useEffect(() => {
    const handleEventListener = (e: any) => {
      console.log(e?.detail, 'e ==>>');
      if (e) {
        setOpenTost({ type: e?.type, message: e?.detail?.message });
      }
    };
    const events = [
      TOAST_MESSAGES.ERROR,
      TOAST_MESSAGES.SUCCESS,
      TOAST_MESSAGES.WARNING
    ];
    events.forEach((type) => {
      document.addEventListener(type, handleEventListener);
    });
    timeoutRef.current = setTimeout(() => {
      setOpenTost(null);
    }, 2000);
    return () => {
      clearInterval(timeoutRef.current);
      if (openTost?.type)
        document.removeEventListener(openTost.type, handleEventListener);
    };
  }, [openTost]);

  return (
    <>
      {openTost && (
        <Toast>{renderByStatus(openTost.type, openTost.message)}</Toast>
      )}
      {children}
    </>
  );
};

export default ToastProvider;
