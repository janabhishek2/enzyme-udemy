import  { configure, mount } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

import App from './App';

configure({ adapter: new EnzymeAdapter()});

const setup = mount(<App />);
const findByTestAttr = (wrapper, value) => wrapper.find(`[data-test="${value}"]`);

test('renders without errors',async () => {
	const wrapper = setup;
	const result = await findByTestAttr(wrapper,'component-app');
	expect(result.length).toBe(1);
});

test('renders increment button', async () => {
	const wrapper = setup;
	const result = await findByTestAttr(wrapper, 'increment-button');
	expect(result.length).toBe(1);
});

test('It shows counter display', async () => {
	const wrapper = setup;
	const result = await findByTestAttr(wrapper, 'counter-display');
	expect(result.length).toBe(1);
});

test('Counter display starts at 0', async () => {
	const wrapper = setup;
	const result = wrapper.find('span[data-test="count"]');
	expect(result.text()).toBe("0");
});

test('Click the button , increment the counter display', async () => { //behaviour
	const wrapper = setup;
	const incrementButton = await findByTestAttr(wrapper,'increment-button');
	incrementButton.simulate('click');
	const counter = await findByTestAttr(wrapper, "count");
	expect(counter.text()).toBe("1");
});