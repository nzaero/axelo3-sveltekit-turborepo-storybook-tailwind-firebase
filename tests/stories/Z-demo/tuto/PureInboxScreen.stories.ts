import { InboxScreen } from '$ui/index.js';
import { fireEvent, within } from '@storybook/testing-library';
export default {
	component: InboxScreen,
	title: 'Z-demo/Tuto/C - PureInboxScreen',
	tags: ['autodocs']
};
const Template = (args) => ({
	Component: InboxScreen,
	props: args
});
export const Default = Template.bind({});
export const Error = Template.bind({});
Error.args = {
	error: true
};
export const WithInteractions = Template.bind({});
WithInteractions.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement);

	// Simulates pinning the first task
	await fireEvent.click(canvas.getByLabelText('pinTask-1'));

	// Simulates pinning the third task
	await fireEvent.click(canvas.getByLabelText('pinTask-3'));
};
