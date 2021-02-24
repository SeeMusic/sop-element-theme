/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
// import { notes } from '@storybook/addon-notes';
// import StoryRouter from 'storybook-vue-router';
// import store from '@/store';

storiesOf('Notice', module)
  .add('MessageBox', () => ({
    template: `
      <div>
        <button @click.prevent="showDialog">打开弹窗</button>
      </div>
    `,
    methods: {
      showDialog() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!',
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除',
          });
        });
      },
    },
  }));
