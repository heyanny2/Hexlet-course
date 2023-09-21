/*Add the Factorial component, which takes a factorial calculation function getFactorial and a value to be computed using this function, value.
The component should invoke the function, passing the value to it, and display the result as a string.
Create a memoized version of the getFactorial function in the App component and pass it to the Factorial component. 
Memoize the Factorial component so that it doesn't re-render unnecessarily, for example, when the language changes.*/

import React, { useState, useCallback, memo } from 'react';
import ReactDOM from 'react-dom/client';
import { useTranslation } from 'react-i18next';

const Factorial = memo(({ number, getFactorial }) => {
  const result = getFactorial(number);
  return (
    <div>{`Factorial of ${number} is ${result}`}</div>
  );
});

const App = () => {
  const { t, i18n } = useTranslation();
  const [value, setValue] = useState(0);
  const handleLangSwitch = (e) => {
    const lang = e.target.dataset.testid;
    i18n.changeLanguage(lang);
  };

  const factorialFunc = (number) => number <= 0 ? 1 : number * factorialFunc(number - 1);

  const getFactorial = useCallback(() => factorialFunc(value), [value]);

  const getClassName = (currLang) => {
    const className = i18n.language === currLang ? 'btn btn-primary' : 'btn btn-outline-primary';
    return className;
  };

  return (
    <div className="App">
      <div className="btn-group mb-3" role="group">
        <button
          type="button"
          data-testid="en"
          className={getClassName('en')}
          onClick={handleLangSwitch}
        >
          {t('languages.en')}
        </button>
        <button
          type="button"
          data-testid="ru"
          className={getClassName('ru')}
          onClick={handleLangSwitch}
        >
          {t('languages.ru')}
        </button>
      </div>
      <br />
      <div className="btn-group mb-3" role="group">
        <button className="btn btn-outline-primary" onClick={() => setValue(1)}>{`${t('factorial')} 1`}</button>
        <button className="btn btn-outline-primary" onClick={() => setValue(5)}>{`${t('factorial')} 5`}</button>
        <button className="btn btn-outline-primary" onClick={() => setValue(10)}>{`${t('factorial')} 10`}</button>
        <button className="btn btn-outline-primary" onClick={() => setValue(20)}>{`${t('factorial')} 20`}</button>
      </div>
      <Factorial number={value} getFactorial={getFactorial} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("container"));
