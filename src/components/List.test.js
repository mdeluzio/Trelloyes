import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';
import STORE from '../store';

describe('List component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List header='First list' cards={[STORE.allCards.a, STORE.allCards.b]}u />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<List header='First list' cards={[STORE.allCards.a, STORE.allCards.b]}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});