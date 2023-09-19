/*Each theme includes a style class that should be applied to the content when switching themes. 
Enhance the theme provider to store the selected theme in the state and provide all components 
with the necessary data for operation (list of themes, current theme, method for changing the theme).

In the components src/Home.jsx, src/Profile.jsx, and src/ThemeSwitcher.jsx, add the retrieval of the required data from the context.*/

//App.jsx
import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import Home from './Home.jsx';
import Profile from './Profile.jsx';
import ThemeSwitcher from './ThemeSwitcher.jsx';
import ThemeContext from './contexts';

const themes = [
  {
    id: 1,
    name: 'White',
    className: 'light',
  },
  {
    id: 2,
    name: 'Black',
    className: 'dark',
  },
  {
    id: 3,
    name: 'Blue',
    className: 'dark-blue',
  },
];

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes[0]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

const App = () => (
  <ThemeProvider>
    <Tabs className="mb-3">
      <Tab eventKey="home" title="Home">
        <Home />
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <Profile />
      </Tab>
    </Tabs>
    <ThemeSwitcher />
  </ThemeProvider>
);

//Home.jsx
import React, { useContext } from 'react';

import ThemeContext from './contexts';

const Home = () => {
  const { theme: { className } } = useContext(ThemeContext);

  return (
    <article className={className}>
      Текст для вкладки Home
    </article>
  );
};

//Profile.jsx
import React, { useContext } from 'react';

import ThemeContext from './contexts';

const Profile = () => {
  const { theme: { className } } = useContext(ThemeContext);

  return (
    <article className={className}>
      Текст для вкладки Profile
    </article>
  );
};

//ThemeSwitcher.jsx

import React, { useContext } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

import ThemeContext from './contexts';

const ThemeSwitcher = () => {
  const { theme, themes, setTheme } = useContext(ThemeContext);

  return (
    <ButtonGroup className="mt-2">
      {themes.map((curTheme) => (
        <ToggleButton
          key={curTheme.id}
          id={`radio-${curTheme.id}`}
          type="radio"
          name="radio"
          value={curTheme.name}
          checked={curTheme.name === theme.name}
          onChange={() => setTheme(curTheme)}
        >
          {curTheme.name}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
};

ReactDOM.render(<App />, document.getElementById("container"));
