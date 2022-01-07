export default {
  title: 'Basic/Button 按钮',
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    type: {
      control: { type: 'select' },
      description: '类型',
      options: ['primary', 'default'],
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'default',
        },
      },
    },
    size: {
      control: { type: 'select' },
      description: '尺寸',
      options: ['default', 'small', 'mini'],
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'default',
        },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: '禁用',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'false',
        },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: '目前设计规范中， `size` 只用到了 `default` 和 `mini` 两种; ElementUI 自带的弹窗混用了 mini 和 small，自定义样式中直接覆写统一',
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <ElButton
      v-bind="$props"
    >
      按钮
    </ElButton>
  `,
});

export const Overview = Template.bind({});
Overview.args = {
};
