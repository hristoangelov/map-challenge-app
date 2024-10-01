import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { PinColourItem } from '../PinColourItem';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('PinColourItem', () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      settings: {
        pinColour: 'red',
      },
    });
  });

  it('dispatches the correct action on press', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <PinColourItem colour="blue" />
      </Provider>
    );

    const button = getByTestId('colour-button');
    fireEvent.press(button);

    const actions = store.getActions();
    expect(actions).toEqual([{ type: 'settings/setPinColour', payload: 'blue' }]);
  });
});
