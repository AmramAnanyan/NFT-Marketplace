export const enum TOAST_MESSAGES {
  SUCCESS = 'toastSuccess',
  ERROR = 'toastError',
  WARNING = 'toastWarning'
}
export const toast = () => {
  return {
    success: (message: string = 'Success') => {
      const successEvent = new CustomEvent(TOAST_MESSAGES.SUCCESS, {
        detail: { message, status: TOAST_MESSAGES.SUCCESS }
      });
      document.dispatchEvent(successEvent);
    },
    error: (message: string = 'Error') => {
      const errorEvent = new CustomEvent(TOAST_MESSAGES.ERROR, {
        detail: { message, status: TOAST_MESSAGES.ERROR }
      });
      document.dispatchEvent(errorEvent);
    },
    warning: (message: string) => {
      const warningEvent = new CustomEvent(TOAST_MESSAGES.WARNING, {
        detail: { message, status: TOAST_MESSAGES.WARNING }
      });
      document.dispatchEvent(warningEvent);
    }
  };
};
