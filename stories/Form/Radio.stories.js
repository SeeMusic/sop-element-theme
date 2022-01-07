import RadioMD from './Radio.md';

export default {
  title: 'Form/Radio 单选框',
  argTypes: {
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
        component: RadioMD,
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      isChecked: 1,
    };
  },
  template: `
    <ElRadioGroup
      v-model="isChecked"
      v-bind="$props"
    >
      <ElRadio
        :label="1"
      >
        唱片公司或厂牌
      </ElRadio>
      <ElRadio
        :label="2"
      >
        个人工作室
      </ElRadio>
      <ElRadio
        :label="3"
      >
        版权代理机构
      </ElRadio>
    </ElRadioGroup>
  `,
});

export const RadioGroup = Template.bind({});

const ButtonGroupTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      isChecked: 1,
    };
  },
  template: `
    <ElRadioGroup
      v-model="isChecked"
      v-bind="$props"
    >
      <ElRadioButton
        :label="1"
      >
        唱片公司或厂牌
      </ElRadioButton>
      <ElRadioButton
        :label="2"
      >
        个人工作室
      </ElRadioButton>
      <ElRadioButton
        :label="3"
      >
        版权代理机构
      </ElRadioButton>
    </ElRadioGroup>
  `,
});

export const RadioButtonGroup = ButtonGroupTemplate.bind({});
RadioButtonGroup.args = {
  disabled: false,
};

// export const Normal = Template.bind({});
// Normal.argTypes = {
//   type: {
//     control: false,
//   },
//   disabled: {
//     control: false,
//   },
// };

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
};
Disabled.argTypes = {
  disabled: {
    control: false,
  },
};

const LineGroupTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      isChecked: 1,
    };
  },
  template: `
    <ElRadioGroup
      v-model="isChecked"
      v-bind="$props"
      class="option-group--block"
    >
      <ElRadio
        :label="1"
      >
        唱片公司或厂牌
      </ElRadio>
      <ElRadio
        :label="2"
      >
        个人工作室
      </ElRadio>
      <ElRadio
        :label="3"
      >
        版权代理机构
      </ElRadio>
    </ElRadioGroup>
  `,
});

export const LineGroup = LineGroupTemplate.bind({});

LineGroup.args = {
  disabled: false,
};
