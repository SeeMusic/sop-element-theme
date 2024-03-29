export default {
  title: 'Navigation/Tabs 标签页',
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      activeTab: 'first',
    };
  },
  template: `
    <ElTabs
      v-model="activeTab"
    >
      <ElTabPane
        name="first"
        label="待审核"
      >
        第一个标签页
      </ElTabPane>
      <ElTabPane
        name="second"
        label="审核未通过"
      >
        第二个标签页
      </ElTabPane>
      <ElTabPane
        name="third"
        label="审核已通过"
      >
        第三个标签页
      </ElTabPane>
    </ElTabs>
  `,
});

export const Overview = Template.bind({});

const OuterTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      activeTab: 'first',
    };
  },
  template: `
    <ElTabs
      v-model="activeTab"
      class="outter"
    >
      <ElTabPane
        name="first"
        label="待审核"
      >
        第一个标签页
      </ElTabPane>
      <ElTabPane
        name="second"
        label="审核未通过"
      >
        第二个标签页
      </ElTabPane>
      <ElTabPane
        name="third"
        label="审核已通过"
      >
        第三个标签页
      </ElTabPane>
    </ElTabs>
  `,
});

export const Outer = OuterTemplate.bind({});
