import React from 'react';
import { render } from '@testing-library/react-native';
import { RightDrawerContent } from '../RightDrawerContent';
import { ConnectorStatus, ConnectorType } from '../../../types';

describe('RightDrawerContent', () => {
  let mockOnPress: jest.Mock<any>;

  beforeEach(() => {
    mockOnPress = jest.fn();
  });

  it('renders correctly with connector types and statuses', () => {
    const { getByText } = render(<RightDrawerContent onPress={mockOnPress} />);

    expect(getByText('Filter')).toBeTruthy();
    expect(getByText('Connector Types:')).toBeTruthy();
    expect(getByText('Connector Statuses:')).toBeTruthy();

    Object.values(ConnectorType).forEach(type => {
      expect(getByText(type)).toBeTruthy();
    });

    Object.values(ConnectorStatus).forEach(status => {
      expect(getByText(status)).toBeTruthy();
    });
  });
});
