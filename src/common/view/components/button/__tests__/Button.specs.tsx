import React from 'react';
import { customRender } from '../../../../../../test/test-utils';
import Button from '../Button';

describe('Button', () => {
  it('Render', () => {
    const rendered = customRender(<Button />);
    expect(rendered.container).toMatchSnapshot();
  });
  it('Should show text button', () => {
    const rendered = customRender(<Button>mock button</Button>);
    expect(rendered.getByText('mock button')).not.toBeNil();
  });
});
