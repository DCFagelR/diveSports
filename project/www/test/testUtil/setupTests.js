import chai from 'chai';
import sinon from 'sinon';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

global.context = describe;
global.it = test;
global.expect = chai.expect;
global.sinon = sinon;
global.stubImport = (sandbox, module, importName) => {
  const stub = sandbox.stub();

  sandbox.stub(module, importName).get(() => stub);

  return stub;
};

beforeEach(() => {
  global.sandbox = sinon.createSandbox();
});

afterEach(() => {
  global.sandbox.restore();
});
