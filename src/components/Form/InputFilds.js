import React from "react";

export const InputField = ({
  placeholder,
  type,
  assistiveText,
  input,
  meta
}) => {
  const isFieldInvalid = meta.touched && meta.invalid;

  return (
    <div className="form__text">
      <input
        {...input}
        placeholder={placeholder}
        type={type}
        className={
          isFieldInvalid ? "form__textInput   error" : "form__textInput"
        }
      />
      <p
        className={
          isFieldInvalid ? "form__error" : "form__assistiveText"
        }
      >
        {isFieldInvalid ? meta.error : assistiveText}
      </p>
    </div>
  );
};

export const RadioInputField = ({ input, meta, radioClass }) => {
  return (
    <input
      {...input}
      type="radio"
      className={
        radioClass
          ? `form__radio ${radioClass}`
          : "form__radio"
      }
    />
  );
};
