import React from 'react';
import { customRender } from '../../../../../../tests/test-utils';
import MaterialBox from '../MaterialBox';

describe('MaterialBox', () => {
  it('Render', () => {
    const rendered = customRender(<MaterialBox />);
    expect(rendered.container).toMatchSnapshot();
  });
  it('Should show text children', () => {
    const rendered = customRender(<MaterialBox>mock test</MaterialBox>);
    expect(rendered.getByText('mock test')).not.toBeNil();
  });
});
