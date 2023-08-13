/*Write a component Definitions that takes data as an object and returns proper HTML structure of <dl> list out of it.
If no data was argumented, render nothing.
Example:
const definitions = [
  { dt: 'one', dd: 'two' },
  { dt: 'another term', dd: 'another description' },
];

Result:
<dl>
  <dt>one</dt>
  <dd>two</dd>
  <dt>another term</dt>
  <dd>another description</dd>
</dl>*/

import ReactDOM from 'react-dom/client';
import React from 'react';
import uniqueId from 'lodash/uniqueId';

export default class DefinitionsList extends React.Component {
  render() {
    const { data } = this.props;
    if (!data.length) {
      return null;
    }
    return (
      <dl>
        {data.map((item) => (
          <React.Fragment key={item.id}>
            <dt>{item.dt}</dt>
            <dd>{item.dd}</dd>
          </React.Fragment>
        ))}
      </dl>
    );
  }
}

const definitions = [
  { dt: 'one', dd: 'two', id: uniqueId() },
  { dt: 'another term', dd: 'another description', id: uniqueId() },
];

ReactDOM.render(
  <DefinitionsList data={definitions} />,
  document.getElementById("container")
);
