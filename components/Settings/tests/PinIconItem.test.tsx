import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, fireEvent } from '@testing-library/react-native';
import { PinIconItem } from '../PinIconItem';

const mockStore = configureStore([]);

describe('PinIconItem', () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      settings: {
        pinIcon: 'search',
      },
    });
  });

  it('dispatches the correct action on press', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <PinIconItem name="search" />
      </Provider>
    );

    const button = getByTestId('icon-button');
    fireEvent.press(button);

    const actions = store.getActions();
    expect(actions).toEqual([{ type: 'settings/setPinIcon', payload: 'search' }]);
  });
});
