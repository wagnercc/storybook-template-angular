
import { Meta, Story } from '@storybook/angular';
import { ButtonComponent } from "src/app/Components/button.component";



export default {
    title: 'Components/Button',
    component: ButtonComponent,
    argTypes: {
        color: { control: 'color' }
    }

} as Meta;

const Template: Story = (args) => ({
    props: args
});

export const Primary = Template.bind({});

Primary.args = {
    label: 'button'
}