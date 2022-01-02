import { useState } from 'react';
import cl from 'classnames';
import PropTypes from 'prop-types';
import { DEFAULT_MAX_LENGTH, DEFAULT_MIN_LENGTH, IPv4 } from '../../constants';

import './styles.css';

const placeholder = 'Search for any API or domain';

export function Input({ disabled, handleUserPosition }) {
  const [text, setText] = useState('');
  const [valid, setValid] = useState(true);

  const isDisabled =
    disabled || !valid || (!!text && text.length < DEFAULT_MIN_LENGTH);

  const handleOnChange = (e) => {
    setText(e.target.value);
    setValid(IPv4.test(e.target.value));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    handleUserPosition(text);
  };

  return (
    <form className="input" onSubmit={onSubmitHandler}>
      <input
        className={cl('input-field', {
          'input-field_invalid': !valid,
        })}
        placeholder={placeholder}
        type="text"
        value={text}
        onChange={handleOnChange}
        minLength={DEFAULT_MIN_LENGTH}
        maxLength={DEFAULT_MAX_LENGTH}
      />
      <button
        className="input-button"
        type="submit"
        aria-label="submit"
        disabled={isDisabled}
      />
    </form>
  );
}

Input.propTypes = {
  disabled: PropTypes.bool.isRequired,
  handleUserPosition: PropTypes.func.isRequired,
};
