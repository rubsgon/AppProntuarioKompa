import { MutableRefObject } from 'react'
import * as Yup from 'yup'
import { FormHandles } from '@unform/core'

const validate = (formRef: MutableRefObject<FormHandles>) => async (data: object, schema: any) => {
    try {
        formRef.current.setErrors({});

        await schema.validate(data, {
          abortEarly: false,
        });
      } catch (err) {
        const validationErrors = {};
        if (err instanceof Yup.ValidationError) {
          err.inner.forEach(error => {
            validationErrors[error.path] = error.message;
          });
          formRef.current.setErrors(validationErrors);
        }
    }
}

const useFormValidation = (formRef: MutableRefObject<FormHandles>) => {
    return {
        validate: validate(formRef)
    }
}

export default useFormValidation