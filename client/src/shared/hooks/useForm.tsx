import React, { useState } from 'react';
import {
  addNonChangedFieldsInFormData,
  inValidFieldCheck
} from 'shared/helpers/validations';

const useForm = () => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [errors, setError] = useState<{
    [key: string]: Object | null;
  } | null>({});

  const handleChange = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    setFormData((prev) => {
      return {
        ...prev,
        [target.name]: target.value
      };
    });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const fullFormData = addNonChangedFieldsInFormData(event, formData);
    setFormData(fullFormData);
    setError(inValidFieldCheck(fullFormData));
  };

  const resetForm = () => {
    setFormData({});
    setError({});
  };
  console.log(errors, 'errors');
  return { formData, errors, handleChange, handleSubmit, resetForm };
};

export default useForm;
