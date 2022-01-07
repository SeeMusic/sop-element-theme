import DrawerMD from './Drawer.md';

export default {
  title: 'Others/Drawer 抽屉',
  parameters: {
    docs: {
      description: {
        component: DrawerMD,
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    showDrawer() {
      this.isShow = true;
    },
  },
  template: `
    <div>
      <button @click.prevent="showDrawer">打开抽屉</button>
      <ElDrawer
        title="抽屉标题"
        :visible.sync="isShow"
      >
        <div class="sd-drawer__container">
          <div class="sd-drawer__content">
            <p>抽屉内容</p>
            <p>抽屉内容</p>
            <p>抽屉内容</p>
          </div>
        </div>
      </ElDrawer>
    </div>
  `,
});

export const Overview = Template.bind({});

const CustomDrawerTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    showDrawer() {
      this.isShow = true;
    },
  },
  template: `
    <div>
      <button @click.prevent="showDrawer">打开抽屉</button>
      <ElDrawer
        title="抽屉标题"
        :visible.sync="isShow"
      >
        <div class="sd-drawer__container">
          <div class="sd-drawer__content">
            <p>抽屉内容</p>
            <p>抽屉内容</p>
            <p>抽屉内容</p>
            <p>抽屉内容</p>
            <p>抽屉内容</p>
            <p>抽屉内容</p>
            <p>抽屉内容</p>
            <p>抽屉内容</p>
            <p>抽屉内容</p>
            <p>抽屉内容</p>
            <p>抽屉内容</p>
            <p>抽屉内容</p>
            <p>抽屉内容</p>
            <p>抽屉内容</p>
            <p>抽屉内容</p>
            <p>抽屉内容</p>
            <p>抽屉内容</p>
            <p>抽屉内容</p>
            <p>抽屉内容</p>
            <p>抽屉内容</p>
            <p>抽屉内容</p>
            <p>抽屉内容</p>
            <p>抽屉内容</p>
            <p>抽屉内容</p>
            <p>抽屉内容</p>
            <p>抽屉内容</p>
            <p>抽屉内容</p>
            <p>抽屉内容</p>
            <p>抽屉内容</p>
            <p>抽屉内容</p>
          </div>
          <div class="sd-drawer__footer">
            <div class="sd-drawer__footer--left">
              <ElButton>
                退出
              </ElButton>
            </div>
            <div class="sd-drawer__footer--right">
              <ElButton
                type="primary"
              >
                提交
              </ElButton>
            </div>
          </div>
        </div>
      </ElDrawer>
    </div>
  `,
});

export const WithFooterDrawer = CustomDrawerTemplate.bind({});
