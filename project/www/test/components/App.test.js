import React from 'react';
import { shallow } from 'enzyme';
import * as auth0Util from '../../src/react-auth0-spa';
import App from '../../src/App';

describe('App.js', () => {
  let instance;
  let useAuth0Stub;

  beforeEach(() => {
    useAuth0Stub = stubImport(sandbox, auth0Util, 'useAuth0');
  });

  afterEach(() => {
    instance.unmount();
  });

  context('when loading', () => {
    beforeEach(() => {
      useAuth0Stub.returns({ loading: true });
      instance = shallow(<App />);
    });

    it('renders the loading component', () => {
      expect(instance.exists('#app-loading')).to.be.true;
    });

    it('does not render the app', () => {
      expect(instance.exists('#app')).to.be.false;
    });
  });

  context('when not loading', () => {
    beforeEach(() => {
      useAuth0Stub.returns({ loading: false });
      instance = shallow(<App />);
    });

    it('renders the loading component', () => {
      expect(instance.exists('#app-loading')).to.be.false;
    });

    it('renders the app', () => {
      expect(instance.exists('#app')).to.be.true;
    });
  });
});
