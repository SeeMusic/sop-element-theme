现有规范下，抽屉组件基本用来替代 `<ElDialog />` 做边栏表单，所以在内部又自定义了一些固定的 flex 布局结构。

```
<div class="sd-drawer__container">
  <div class="sd-drawer__content">
    /* 正文内容区 */
  </div>
  <div class="sd-drawer__footer">
    /* 底部固定操作区，可选 */
  </div>
</div>
```

> 为了滚动条限定在正文内容区，所以移除原有的 `<div class="el-drawer__body">` 的左右边距，所有情况都需要使用此嵌套结构。
> 以后可以考虑做成简单的组件通过 slot 调用，不再每次复制粘贴 DOM 结构