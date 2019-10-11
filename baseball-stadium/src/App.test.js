import React from 'react';
import * as rtl from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import App from './App';


afterEach(rtl.cleanup);

test('ball is found', () => {
  const {getByText} = rtl.render(<App />);
  getByText('Ball');
});