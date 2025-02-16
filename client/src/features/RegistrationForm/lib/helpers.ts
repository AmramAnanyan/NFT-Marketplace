export const formValidation = (form: [key: string]) => {
  const error: { [key: string]: string } = {};
  const formInputs = Object.keys(form);
  formInputs.forEach((inputType) => {
    switch (inputType) {
      case 'name':
        error[inputType] = '';
        break;
      case 'surname':
        break;
      default:
    }
  });
};
