export const formValidation = (form: [key: string]) => {
  const error: { [key: string]: string } = {}
  console.log(form, 'form')
  const formInputs = Object.keys(form)
  formInputs.forEach((inputType) => {
    switch (inputType) {
      case 'name':
        error[inputType] = ''
        break
      case 'surname':
        console.log(22222)
        break
      default:
    }
  })
}
