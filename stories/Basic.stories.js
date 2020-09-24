/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
// import { notes } from '@storybook/addon-notes';
// import StoryRouter from 'storybook-vue-router';
// import store from '@/store';

storiesOf('Basic', module)
  .add('Button 按钮',
    () => ({
      template: `
        <div>
          <h4>Type</h4>
          <ElButton>Default</ElButton>
          <ElButton type="primary">Primary</ElButton>
          <h4>Size</h4>
          <ElButton>Type: Default</ElButton>
          <ElButton type="primary">Type: Primary</ElButton>
          <ElButton size="small">Size: small</ElButton>
          <ElButton size="mini">Size: mini</ElButton>
          <ElButton type="primary" size="mini">Size: mini</ElButton>
        </div>
      `,
    }),
    {
      notes: '目前尺寸只用到了 <code>普通</code> 和 <code>mini</code> 两种，暂时只定义这两种样式；ElementUI 自带的 弹窗混用了 mini 和 small，两者直接统一',
    });
