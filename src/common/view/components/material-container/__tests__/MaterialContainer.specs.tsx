import React from 'react';
import { customRender } from '../../../../../../tests/test-utils';
import MaterialContainer from '../MaterialContainer';

describe('MaterialContainer', () => {
  it('Render', () => {
    const rendered = customRender(<MaterialContainer />);
    expect(rendered.container).toMatchSnapshot();
  });
  it('Should show text children container', () => {
    const rendered = customRender(
      <MaterialContainer>mock test</MaterialContainer>
    );
    expect(rendered.getByText('mock test')).not.toBeNil();
  });
});
