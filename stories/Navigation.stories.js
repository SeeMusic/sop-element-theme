/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
// import { notes } from '@storybook/addon-notes';
// import StoryRouter from 'storybook-vue-router';
// import store from '@/store';

storiesOf('Navigation', module)
  .add('Tabs 标签页', () => ({
    data() {
      return {
        activeTab: 'first',
      };
    },
    template: `<div>
      <ElTabs
        v-model="activeTab"
        class="outter"
      >
        <ElTabPane
          name="first"
          label="常规 1"
        >
          第一个标签页
        </ElTabPane>
        <ElTabPane
          name="second"
          label="常规 2"
        >
          第二个标签页
        </ElTabPane>
        <ElTabPane
          name="third"
          label="禁用"
          disabled
        >
          第三个标签页
        </ElTabPane>
      </ElTabs>
      <br><br>
      <ElTabs
        v-model="activeTab"
      >
        <ElTabPane
          name="first"
          label="常规 1"
        >
          第一个标签页
        </ElTabPane>
        <ElTabPane
          name="second"
          label="常规 2"
        >
          第二个标签页
        </ElTabPane>
        <ElTabPane
          name="third"
          label="禁用"
          disabled
        >
          第三个标签页
        </ElTabPane>
      </ElTabs>
    </div>`,
  }));
