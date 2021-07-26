import React from 'react';
import { customRender } from '../../../../../../tests/test-utils';
import MaterialBox from '../MaterialBox';

describe('Button', () => {
  it('Render', () => {
    const rendered = customRender(<MaterialBox />);
    expect(rendered.container).toMatchSnapshot();
  });
  it('Should show text button', () => {
    const rendered = customRender(<MaterialBox>mock test</MaterialBox>);
    expect(rendered.getByText('mock test')).not.toBeNil();
  });
});
