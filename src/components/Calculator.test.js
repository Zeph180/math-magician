/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculator from './Calculator';
import * as calcLogic from '../logic/calculate';

describe('Calculator ui', () => {
  it('should match domsnapshot ', () => {
    const comp = renderer.create(<Calculator />);
    expect(comp.toJSON()).toMatchSnapshot();
  });

  it('should show ac button on ui', () => {
    render(<Calculator />);
    const element = screen.getByRole('button', { name: 'AC' });
    expect(element).toBeInTheDocument();
  });

  it('should render call calculate method and display result on screen', () => {
    const spyCalc = jest.spyOn(calcLogic, 'default').mockImplementation(() => ({ total: null, next: 22, operation: null }));
    render(<Calculator />);

    const buttonElement = screen.getByRole('button', { name: '=' });
    userEvent.click(buttonElement);
    userEvent.click(buttonElement);
    expect(spyCalc).toBeCalledTimes(2);
    const element = screen.getByText('=');
    expect(element).toBeInTheDocument();
  });
});
