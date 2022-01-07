export default {
  title: 'Others/Popconfirm 气泡确认框',
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      active: '1',
      active2: [],
    };
  },
  template: `
    <div>
      <ElPopconfirm
        title="确认重置？"
        placement="bottom-start"
        cancel-button-type="reset"
        :visible-arrow="false"
        :hide-icon="true"
        :width="256"
      >
        <a
          slot="reference"
          href="#"
          @click.prevent
        >重置该发票</a>
      </ElPopconfirm>
    </div>
  `,
});

export const Overview = Template.bind({});
