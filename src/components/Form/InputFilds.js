import React from 'react';
import PropTypes from 'prop-types';

export const InputField = ({ placeholder, type, input, meta }) => {
    const isFieldInvalid = meta.touched && meta.invalid;

    return (
        <div className="form__text">
            <input
                {...input}
                placeholder={placeholder}
                type={type}
                className={isFieldInvalid ? 'form__textInput   error' : 'form__textInput'}
            />
            <p className={isFieldInvalid ? 'form__error' : 'form__assistiveText'}>
                {isFieldInvalid && meta.error}
            </p>
        </div>
    );
};

export const RadioInputField = ({ input, radioClass }) => {
    return (
        <input
            {...input}
            type="radio"
            className={radioClass ? `form__radio ${radioClass}` : 'form__radio'}
        />
    );
};

InputField.propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.string,
    input: PropTypes.object,
    meta: PropTypes.object,
};

RadioInputField.propTypes = {
    input: PropTypes.object,
    radioClass: PropTypes.string,
};
