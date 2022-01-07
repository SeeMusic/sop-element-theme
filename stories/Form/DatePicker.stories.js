export default {
  title: 'Form/DatePicker 日期选择器',
  argTypes: {
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
      basic: '',
    };
  },
  template: `
    <ElDatePicker
      v-model="basic"
      placeholder="Placeholder Text"
      value-format="yyyy-MM-dd"
      prefix-icon="el-icon-caret-bottom"
      :clearable="false"
    />
  `,
});

export const Basic = BasicTemplate.bind({});

const RangeTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      daterange: '',
    };
  },
  template: `
    <ElDatePicker
      v-model="daterange"
      type="daterange"
      unlink-panels
      range-separator="～"
      prefix-icon="el-icon-caret-bottom"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :editable="false"
      :clearable="false"
    />
  `,
});

export const DateRange = RangeTemplate.bind({});

const MonthRangeTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      monthrange: '',
    };
  },
  template: `
    <ElDatePicker
      v-model="monthrange"
      type="monthrange"
      unlink-panels
      range-separator="～"
      prefix-icon="el-icon-caret-bottom"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :editable="false"
      :clearable="false"
    />
  `,
});

export const MonthDateRange = MonthRangeTemplate.bind({});
