export default {
  title: 'Form/Cascader 级联选择器',
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
      options: [
        {
          id: 1,
          name: '中国',
          children: [
            {
              id: 11,
              name: '上海',
            },
            {
              id: 12,
              name: '北京',
            },
            {
              id: 13,
              name: '天津',
            },
            {
              id: 14,
              name: '重庆',
            },
            {
              id: 15,
              name: '哈尔滨',
            },
            {
              id: 16,
              name: '长春',
            },
            {
              id: 17,
              name: '大连',
            },
            {
              id: 18,
              name: '石家庄',
            },
          ],
        },
        {
          id: 2,
          name: '美国',
          children: [
            {
              id: 21,
              name: '纽约',
            },
            {
              id: 22,
              name: '华盛顿',
            },
          ],
        },
        {
          id: 3,
          name: '英国',
          children: [
            {
              id: 31,
              name: '伦敦',
            },
          ],
        },
        {
          id: 4,
          name: '法国',
          children: [
            {
              id: 41,
              name: '巴黎',
            },
          ],
        },
        {
          id: 5,
          name: '德国',
          children: [
            {
              id: 51,
              name: '柏林',
            },
          ],
        },
        {
          id: 6,
          name: '意大利',
          children: [
            {
              id: 61,
              name: '罗马',
            },
          ],
        },
      ],
      value: [null, null],
    };
  },
  template: `
    <ElCascader
      v-model="value"
      :options="options"
      :props="{
        value: 'id',
        label: 'name',
      }"
    />
  `,
});

export const Basic = BasicTemplate.bind({});
