/*Implement tabs and a theme switcher for the content inside the tabs.
Each theme includes a style class that should be assigned to the content when switching themes. The first theme is selected by default."
*/

//showcase on CodePen https://codepen.io/heyanny2/pen/RwEoJdQ
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Tabs, Tab, ButtonGroup, ToggleButton } from 'react-bootstrap';

//App.jsx
const ThemeContext = React.createContext({
  themes: [],
  theme: {},
  setTheme: () => {},
});

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { theme: themes[0] };
  }

  setTheme = (theme) => {
    this.setState({ theme });
  };

  render() {
    const { theme } = this.state;
    return (
      <ThemeContext.Provider value={{ theme, themes, setTheme: this.setTheme }}>
        <Tabs className="mb-3">
          <Tab eventKey="home" title="Home">
            <Home />
          </Tab>
          <Tab eventKey="profile" title="Profile">
            <Profile />
          </Tab>
        </Tabs>
        <ThemeSwitcher />
      </ThemeContext.Provider>
    );
  }
}

//Home.jsx
const content = 'Текст для вкладки Home';

class Home extends React.Component {
  static contextType = ThemeContext;

  render() {
    const { theme } = this.context;
    const { className } = theme;
    return (
      <article className={className}>{content}</article>
    );
  }
}

//Profile.jsx
const content = 'Текст для вкладки Profile';

class Profile extends React.Component {
  static contextType = ThemeContext;

  render() {
    const { theme } = this.context;
    const { className } = theme;
    return (
      <article className={className}>{content}</article>
    );
  }
}

//ThemeSwitcher.jsx
class ThemeSwitcher extends React.Component {
  static contextType = ThemeContext;

  render() {
    const { theme, themes, setTheme } = this.context;
    return (
      <ButtonGroup className="mt-2">
        {themes.map((curTheme) => (
          <ToggleButton
            key={curTheme.id}
            id={`radio-${curTheme.id}`}
            type="radio"
            name="radio"
            checked={curTheme.name === theme.name}
            value={curTheme.name}
            onChange={() => setTheme(curTheme)}
          >
            {curTheme.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
