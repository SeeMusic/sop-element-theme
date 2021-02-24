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
          <p>设计规范只有大小两组，小按钮统一使用 <code>size="mini"</code>，样式中 small 和 mini 统一</p>
          <h4>常规尺寸</h4>
          <ElButton type="primary">主按钮： type="primary"</ElButton>
          <ElButton type="primary" disabled>主按钮禁用</ElButton>
          <ElButton>默认为幽灵按钮，type 不传</ElButton>
          <ElButton disabled>幽灵按钮禁用</ElButton>
          <h4>小尺寸</h4>
          <ElButton type="primary" size="mini">主按钮</ElButton>
          <ElButton type="primary" size="mini" disabled>主按钮禁用</ElButton>
          <ElButton size="mini">幽灵按钮</ElButton>
          <ElButton size="mini" disabled>幽灵按钮禁用</ElButton>
        </div>
      `,
    }),
    {
      notes: '当前设计规范中，只使用了一种尺寸目前尺寸只用到了 <code>普通</code> 和 <code>mini</code> 两种，暂时只定义这两种样式；ElementUI 自带的 弹窗混用了 mini 和 small，两者直接统一',
    });
