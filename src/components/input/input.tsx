'use client';
import { ChangeEvent, InputHTMLAttributes, useContext } from 'react';
import { FormContext } from '../form/form';
import { BottomSheetContext } from '../bottom-sheet/bottom-sheet';

type InputPropType = InputHTMLAttributes<HTMLInputElement> & {
  colorTheme?: 'black' | 'white';
  styles?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function Input(props: InputPropType) {
  const { id, colorTheme = 'black', styles, value, onChange, ...rest } = props;
  const formContext = useContext(FormContext);
  const bottomSheetContext = useContext(BottomSheetContext);
  const inputTheme = {
    black: 'border-black ',
    white: 'border-white ',
  };

  if (!formContext && !bottomSheetContext) {
    return (
      <input
        id={id}
        className={
          'bg-invalidLight w-full font-medium16 text-black border rounded m-0 outline-none box-border p-3 mt-1 ' +
          inputTheme[colorTheme] +
          styles
        }
        {...rest}
        value={value}
        onChange={onChange}
      />
    );
  }

  if (formContext) {
    const { formData, handleFormData } = formContext;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      handleFormData(id!, e.currentTarget.value);
    };

    return (
      <input
        id={id}
        className={
          'bg-invalidLight w-full font-medium16 text-black border rounded m-0 outline-none box-border p-3 mt-1 ' +
          inputTheme[colorTheme] +
          styles
        }
        {...rest}
        value={formData[id!] || ''}
        onChange={handleChange}
      />
    );
  }

  if (bottomSheetContext) {
    const { bottomSheetData, handleBottomSheetData } = bottomSheetContext;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      handleBottomSheetData(id!, e.currentTarget.value);
    };

    return (
      <input
        id={id}
        className={
          'bg-invalidLight w-full font-medium16 text-black border rounded m-0 outline-none box-border p-3 mt-1 ' +
          inputTheme[colorTheme] +
          styles
        }
        {...rest}
        value={bottomSheetData[id!] || ''}
        onChange={handleChange}
      />
    );
  }
}
