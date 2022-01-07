export default {
  title: 'Data/Pagination 分页',
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      size: 20,
      total: 100,
      cur: 0,
    };
  },
  template: `
    <ElPagination
      layout="total, prev, pager, next, jumper, sizes"
      :page-size.sync="size"
      :total="total"
      :current-page="cur"
    />
  `,
});

export const Overview = Template.bind({});
