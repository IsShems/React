
import React, { useRef, useEffect, useState } from 'react';

function FocusInput() {
  const inputRef = useRef(null);
  const [shouldFocus, setShouldFocus] = useState(false);

  const focusInput = () => {
    setShouldFocus(true);
  };

  useEffect(() => {
    if (shouldFocus) {
      const inputElement = inputRef.current;
      if (inputElement) {
        inputElement.focus();
      }
      // Для сбрсавыния флага shouldFocus
      //setShouldFocus(false);
    }
  }, [shouldFocus]);

  return (
    <div>
      <button onClick={focusInput}>Установить фокус</button>
      <input
        type="text"
        ref={inputRef}
        placeholder={shouldFocus ? 'Фокус установлен' : 'Нажмите кнопку для установки фокуса'}
      />
      <p> "Фокус установлен" сработает при нажатии, также можно чтобы сбрасывался фокус автоматически для этого раскомментируйте //setShouldFocus(false); в коде</p>
      <button onClick={() => setShouldFocus(false)}>Сбросить фокус</button>
      
    </div>
  );
}

export default FocusInput;
