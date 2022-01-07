import FormMD from './Form.md';

export default {
  title: 'Form/Form 表单全局',
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
    // inline: {
    //   control: { type: 'boolean' },
    //   defaultValue: false,
    //   description: '行内模式',
    //   table: {
    //     type: {
    //       summary: 'boolean',
    //     },
    //     defaultValue: {
    //       summary: 'false',
    //     },
    //   },
    // },
    // labelPosition: {
    //   control: { type: 'select' },
    //   description: '表单域标签的位置',
    //   options: ['top', 'left', 'right'],
    //   table: {
    //     type: {
    //       summary: 'string',
    //     },
    //     defaultValue: {
    //       summary: 'top',
    //     },
    //   },
    // },
  },
  parameters: {
    docs: {
      description: {
        component: FormMD,
      },
    },
  },
};

const BasicTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      text: '',
      password: '',
      typeId: 1,
      typeIds: [],
    };
  },
  template: `
    <ElForm
      v-bind="$props"
      label-position="top"
    >
      <ElFormItem
        required
        label="文本"
      >
        <ElInput v-model="text" />
        <div class="sd-form-item--more">3-5字符，必填 <a href="#">详情</a></div>
      </ElFormItem>

      <ElFormItem
        label="文本域"
      >
        <ElInput
          type="textarea"
        />
      </ElFormItem>

      <ElFormItem
        label="Select"
      >
        <ElSelect
          v-model="typeId"
        >
          <ElOption label="选项 1" :value="1" />
          <ElOption label="选项 2" :value="2" />
        </ElSelect>
      </ElFormItem>

      <ElFormItem
        label="Multiple Select"
      >
        <ElSelect
          v-model="typeIds"
          multiple
          collapse-tags
        >
          <ElOption label="选项 1" :value="1" />
          <ElOption label="选项 2" :value="2" />
        </ElSelect>
        <div class="sd-form-item--more">多选，至少选择一项</div>
      </ElFormItem>

      <ElFormItem>
        <ElButton
          type="primary"
        >
          Submit
        </ElButton>

        <ElButton>
          Cancel
        </ElButton>
      </ElFormItem>
    </ElForm>
  `,
});

export const Basic = BasicTemplate.bind({});

// export const Disabled = BasicTemplate.bind({});
// Disabled.args = {
//   disabled: true,
// };
// Disabled.argTypes = {
//   disabled: {
//     control: false,
//   },
// };

Basic.args = {
  disabled: false,
  // labelPosition: 'top',
};
