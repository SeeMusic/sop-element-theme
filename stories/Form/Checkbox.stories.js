// import RadioMD from './Radio.md';

export default {
  title: 'Form/Checkbox 多选框',
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
  // parameters: {
  //   docs: {
  //     description: {
  //       component: RadioMD,
  //     },
  //   },
  // },
};

const BasicTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      checked: false,
    };
  },
  template: `
    <ElCheckbox
      v-model="checked"
      v-bind="$props"
    >
      备选项
    </ElCheckbox>
  `,
});

export const Basic = BasicTemplate.bind({});

export const Disabled = BasicTemplate.bind({});
Disabled.args = {
  disabled: true,
};
Disabled.argTypes = {
  disabled: {
    control: false,
  },
};

const GroupTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      checkedlist: [],
    };
  },
  template: `
    <ElCheckboxGroup
      v-model="checkedlist"
      v-bind="$props"
    >
      <ElCheckbox
        :label="1"
      >
        唱片公司或厂牌
      </ElCheckbox>
      <ElCheckbox
        :label="2"
      >
        个人工作室
      </ElCheckbox>
      <ElCheckbox
        :label="3"
      >
        版权代理机构
      </ElCheckbox>
    </ElCheckboxGroup>
  `,
});

export const CheckboxGroup = GroupTemplate.bind({});

const LineGroupTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      checkedlist: [],
    };
  },
  template: `
    <ElCheckboxGroup
      v-model="checkedlist"
      v-bind="$props"
      class="option-group--block"
    >
      <ElCheckbox
        :label="1"
      >
        唱片公司或厂牌
      </ElCheckbox>
      <ElCheckbox
        :label="2"
      >
        个人工作室
      </ElCheckbox>
      <ElCheckbox
        :label="3"
      >
        版权代理机构
      </ElCheckbox>
    </ElCheckboxGroup>
  `,
});

export const LineGroup = LineGroupTemplate.bind({});

LineGroup.args = {
  disabled: false,
};
