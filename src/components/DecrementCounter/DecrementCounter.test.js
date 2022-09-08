import { configure, mount } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import DecrementCounter from "./DecrementCounter";

configure({ adapter: new EnzymeAdapter() });

const setup = () => mount(<DecrementCounter />);
const findByAttrName = (wrapper, name) => wrapper.find(`[data-test="${name}"]`);

// describe('Testing decrement button', () => { 
// 	test('renders without errors', async () => {
// 		const wrapper = setup();
// 		const hasDisplay = await findByAttrName(wrapper, 'decrement-counter-display');
// 		const hasDecrementButton = await findByAttrName(wrapper, 'decrement-button');
// 		expect(hasDisplay.length).toBe(1);
// 		expect(hasDecrementButton.length).toBe(1);
// 	});
// 	test('renders display correctly', async () => {
// 		const wrapper =setup();
// 		const display = await findByAttrName(wrapper, 'decrement-counter-display');
// 		expect(display.text()).toBe('The value of decrement counter is 0');
// 	});
// 	test('renders decrement button', async () => {
// 		const wrapper =setup();
// 		const decrementButton = await findByAttrName(wrapper, 'decrement-button');
// 		expect(decrementButton.length).toBe(1);
// 	});
// 	test('Counter starts at 0', async () => {
// 		const wrapper = setup();
// 		const textWrapper = await findByAttrName(wrapper,'decrement-count');
// 		expect(textWrapper.text()).toBe("0");
// 	});
// 	test('Counter decrements when clicked the button',async () => {
// 		const wrapper = setup();
// 		const decrementButton = await findByAttrName(wrapper,'decrement-button');
// 		decrementButton.simulate('click');
// 		const displayText = await findByAttrName(wrapper, 'decrement-count');
// 		expect(displayText.text()).toBe("-1");
// 	});
//  });

describe('Decrement counter tests', () => {

	test('Renders the decrement counter has display and button', async () => {
		const decrementCounter = setup();
		const display = await findByAttrName(decrementCounter,'decrement-counter-display');
		const decrementButton = await findByAttrName(decrementCounter,'decrement-button');
		expect(display.length).toBe(1);
		expect(decrementButton.length).toBe(1);
	});

	test('counter starts at 5', async () => {
		const wrapper = setup();
		const countValueNode = await findByAttrName(wrapper,'decrement-count');
		expect(countValueNode.text()).toBe("5");
	});

	test('counter decrements on click', async () => {
		const wrapper = setup();
		const decrementButton = await findByAttrName(wrapper,'decrement-button');
		decrementButton.simulate('click');
		const counterValue = await findByAttrName(wrapper, 'decrement-count');
		expect(counterValue.text()).toBe("4");
	});

	test('Counter displays error message when decrements below 0', async () => {
		const wrapper = setup();
		const errorMessage = await findByAttrName(wrapper, 'error_message');
		expect(errorMessage.length).toBe(0);
		const decButton =  await findByAttrName(wrapper,'decrement-button');
		decButton.simulate('click'); //4
		decButton.simulate('click'); //3
		decButton.simulate('click'); //2
		decButton.simulate('click'); //1
		decButton.simulate('click'); //0
		decButton.simulate('click'); 
		const error_messageNew = await findByAttrName(wrapper, 'error_message');
		expect(error_messageNew.length).toBe(1);
	})
});