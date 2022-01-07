export default {
  title: 'Form/Select 选择器',
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

const groupOptions = [
  {
    label: '热门国家 / 地区',
    options: [
      {
        value: 'Shanghai',
        label: '上海',
      },
      {
        value: 'Beijing',
        label: '北京',
      },
    ],
  },
  {
    label: 'A',
    options: [
      {
        value: '1',
        label: '阿尔巴尼亚',
      },
      {
        value: '2',
        label: '安道尔',
      },
      {
        value: '3',
        label: '奥地利',
      },
      {
        value: '4',
        label: '澳大利亚',
      },
      {
        value: '5',
        label: '阿尔及利亚',
      },
    ],
  },
  {
    label: 'B',
    options: [
      {
        value: '6',
        label: '巴西',
      },
      {
        value: '7',
        label: '巴林',
      },
      {
        value: '8',
        label: '白俄罗斯',
      },
      {
        value: '9',
        label: '比利时',
      },
      {
        value: '10',
        label: '玻利维亚',
      },
      {
        value: '11',
        label: '荷兰加勒比区',
      },
      {
        value: '12',
        label: '英属维尔京群岛',
      },
    ],
  },
];

const BasicTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      optionArea: '',
      options: [
        {
          value: '6',
          label: '阿尔巴尼亚',
        },
        {
          value: '7',
          label: '安道尔',
        },
        {
          value: '8',
          label: '奥地利',
        },
        {
          value: '9',
          label: '澳大利亚',
        },
        {
          value: '10',
          label: '阿尔及利亚',
        },
        {
          value: '11',
          label: '苏维埃共和国苏维埃共和国',
        },
      ],
    };
  },
  template: `
    <ElSelect
      v-model="optionArea"
      v-bind="$props"
    >
      <ElOption
        v-for="(item, index) in options"
        :key="index"
        :label="item.label"
        :value="item.value"
      />
    </ElSelect>
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
      groupOptionArea: '',
      groupOptions,
    };
  },
  template: `
    <ElSelect
      v-model="groupOptionArea"
      filterable
    >
      <ElOptionGroup
        v-for="(group, groupIndex) in groupOptions"
        :key="groupIndex"
        :label="group.label"
      >
        <ElOption
          v-for="(item, itemIndex) in group.options"
          :key="itemIndex"
          :label="item.label"
          :value="item.value"
        />
      </ElOptionGroup>
    </ElSelect>
  `,
});

export const Group = GroupTemplate.bind({});

const GroupInlineTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      groupOptionArea: '',
      groupOptions,
    };
  },
  template: `
    <ElSelect
      v-model="groupOptionArea"
      filterable
    >
      <ElOptionGroup
        v-for="(group, groupIndex) in groupOptions"
        :key="groupIndex"
        :label="group.label"
        class="inline"
      >
        <ElOption
          v-for="(item, itemIndex) in group.options"
          :key="itemIndex"
          :label="item.label"
          :value="item.value"
        />
      </ElOptionGroup>
    </ElSelect>
  `,
});

export const InlineGroupItem = GroupInlineTemplate.bind({});

export const MultipleSelect = BasicTemplate.bind({});
MultipleSelect.args = {
  multiple: true,
  collapseTags: true,
};
