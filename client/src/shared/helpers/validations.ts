import { validationKeys } from 'shared/constants/validation';
import { isPropertyNull } from './global';
// mising validation uniq functions
export const validateInputKeys = (keys: string, value: string) => {
  switch (keys) {
    case 'name':
    case 'surname':
      {
        if (!value || value.length < 3) {
          return validationKeys.text;
        }
      }
      break;
    case 'date':
      {
        if (!value) {
          return validationKeys.required;
        }
      }
      break;
    case 'email':
      {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return validationKeys.email;
        }
      }
      break;
    case 'password':
      {
        if (!value || value.length < 4) {
          return validationKeys.required;
        }
      }
      break;
    default:
      return null;
  }
  return null;
};

export const inValidFieldCheck = (formData: { [key in string]: string }) => {
  let errorObj: Record<string, Object | null> = {};
  for (let key in formData) {
    errorObj[key] = validateInputKeys(key, formData[key]);
  }
  const isAllNull = isPropertyNull(errorObj);
  if (isAllNull) {
    return null;
  }
  return errorObj;
};

export const addNonChangedFieldsInFormData = (
  formEvent: React.SyntheticEvent,
  formData: Record<string, string>
) => {
  const {
    currentTarget: { children: childrenElements }
  } = formEvent;

  let data: Record<string, string> = {};
  for (let i = 0; i < childrenElements.length; i++) {
    if (childrenElements[i] instanceof HTMLInputElement) {
      const inputElement = childrenElements[i] as HTMLInputElement;
      data[inputElement.name] = formData[inputElement.name]
        ? formData[inputElement.name]
        : '';
    }
  }
  return data;
};
