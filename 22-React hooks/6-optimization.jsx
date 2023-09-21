/*Add the Factorial component, which takes a factorial calculation function getFactorial and a value to be computed using this function, value, without using memoization methods.
As in the previous application, there should be buttons for switching languages and calculating factorials for numbers 1, 5, 10, and 20.
Create a component for calculating factorials and displaying the results similar to the previous task. 
The component should not re-render when switching languages.*/

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { useTranslation } from 'react-i18next';

const Factorial = ({ number }) => {
  console.log('render');
  const getFactorial = (number) => number <= 0 ? 1 : number * getFactorial(number - 1);
  const result = getFactorial(number);

  return (
    <div>{`Factorial of ${number} is ${result}`}</div>
  );
};

const ButtonGroup = ({ changeValue }) => {
  const { t, i18n } = useTranslation();
  const handleLangSwitch = (e) => {
    const lang = e.target.dataset.testid;
    i18n.changeLanguage(lang);
  };

  const getClassName = (currLang) => {
    const className = i18n.language === currLang ? 'btn btn-primary' : 'btn btn-outline-primary';
    return className;
  };

  return (
    <>
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
        <button className="btn btn-outline-primary" onClick={() => changeValue(1)}>{`${t('factorial')} 1`}</button>
        <button className="btn btn-outline-primary" onClick={() => changeValue(5)}>{`${t('factorial')} 5`}</button>
        <button className="btn btn-outline-primary" onClick={() => changeValue(10)}>{`${t('factorial')} 10`}</button>
        <button className="btn btn-outline-primary" onClick={() => changeValue(20)}>{`${t('factorial')} 20`}</button>
      </div>
    </>
  );
}

const App = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <ButtonGroup changeValue={setValue} />
      <Factorial number={value} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("container"));
