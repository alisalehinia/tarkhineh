"use client";
import React, { useState } from 'react';
import { Button } from './button';

interface FormValues {
  fullName: string;
  email: string;
  phoneNumber: string;
  text: string
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  text?: string
}

const initialFormValues: FormValues = {
  fullName: '',
  email: '',
  phoneNumber: '',
  text: ''
};

const validate = (values: FormValues): FormErrors => {
  const errors: FormErrors = {};

  if (!values.fullName) {
    errors.fullName = 'fullName is required';
  }

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = 'phoneNumber is required';
  } else if (values.phoneNumber.length === 11) {
    errors.phoneNumber = 'phoneNumber must be 11 character';
  }
  if (!values.text) {
    errors.fullName = 'text is required';
  }

  return errors;
};

const useForm = () => {
  const [values, setValues] = useState<FormValues>(initialFormValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setTouched({ ...touched, [name]: true });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors = validate(values);
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      // Submit the form data
      console.log('Form submitted:', values);
    }
  };

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};

const FooterForm = () => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useForm();

  return (
    <div className='w-full'>
      <h1 className='text-white font-semibold text-2xl p-2 mb-4'>پیام به ترخینه</h1>
      <form onSubmit={handleSubmit} className=''>
       <div className='flex'>
       <div className='flex flex-col'>
          <div className='p-2'>
            <input
              type="text"
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='نام و نام خانوادگی'
              className='text-white outline-none p-2 rounded-lg placeholder:text-white
              bg-transparent border border-white focus:backdrop-blur-lg 
              '
            />
            {touched.fullName && errors.fullName && <div>{errors.fullName}</div>}
          </div>
          <div className='p-2'>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className='text-white outline-none p-2 rounded-lg placeholder:text-white
              bg-transparent border border-white focus:backdrop-blur-lg
              '
              placeholder='ایمیل'
            />
            {touched.email && errors.email && <div>{errors.email}</div>}
          </div>
          <div className='p-2'>
            <input
              type="tel"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              className='text-white outline-none p-2 rounded-lg placeholder:text-white
              bg-transparent border border-white focus:backdrop-blur-lg
              '
              placeholder='شماره تماس'
            />
            {touched.phoneNumber && errors.phoneNumber && <div>{errors.phoneNumber}</div>}
          </div>
        </div>
          <div className='p-2 flex-1'>
            <input
              type="text"
              name="fullName"
              value={values.text}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='متن پیام'
              className='text-white outline-none p-2 rounded-lg placeholder:text-white
              bg-transparent border border-white focus:backdrop-blur-lg h-full w-full place-content-start
              '
            />
            {touched.text && errors.text && <div>{errors.text}</div>}
          </div>
       </div>
        <div className=' text-left m-2'>
        <Button type="submit" className='bg-green-500 hover:bg-green-600  ml-auto inline-block'>Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default FooterForm;
