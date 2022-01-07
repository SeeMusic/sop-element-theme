import InputMD from './Input.md';

export default {
  title: 'Form/Input 输入框',
  argTypes: {
    type: {
      options: ['text', 'password', 'textarea'],
      control: {
        type: 'radio',
      },
      defaultValue: 'text',
      description: '类型',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'text',
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
        component: InputMD,
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      value: '',
    };
  },
  computed: {
    placeholder() {
      return this.type === 'password' ? '请输入密码' : '请输入内容';
    },
  },
  template: `
    <ElInput
      :placeholder="placeholder"
      v-bind="$props"
      v-model="value"
    />
  `,
});

export const Overview = Template.bind({});

export const Normal = Template.bind({});
Normal.argTypes = {
  type: {
    control: false,
  },
  disabled: {
    control: false,
  },
};

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
};
Disabled.argTypes = {
  type: {
    control: false,
  },
  disabled: {
    control: false,
  },
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
};

Password.argTypes = {
  type: {
    control: false,
  },
  disabled: {
    control: false,
  },
};

const SlotTemplate = () => ({
  data() {
    return {
      value: '',
    };
  },
  template: `
    <ElInput
      placeholder="请输入内容"
      v-model="value"
    >
      <template slot="prepend">Https://</template>
      <template slot="append">.com</template>
    </ElInput>
  `,
});

export const Slot = SlotTemplate.bind({});

Slot.argTypes = {
  type: {
    control: false,
  },
  disabled: {
    control: false,
  },
};

const AutosizeTemplate = () => ({
  data() {
    return {
      value: '',
    };
  },
  template: `
    <ElInput
      placeholder="请输入内容"
      type="textarea"
      :autosize="{
        minRows: 3,
        maxRows: 6,
      }"
      v-model="value"
    />
  `,
});

export const Autosize = AutosizeTemplate.bind({});
Autosize.args = {
};

Autosize.argTypes = {
  type: {
    control: false,
  },
  disabled: {
    control: false,
  },
};
