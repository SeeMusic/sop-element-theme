* 绝大多数场景，都会使用 `<ElRadioGroup />` 呈现，独立的 `<ElRadio />` 无实际意义
* 固定样式，不接受 ElementUI 的 `size` 参数
* 当前版本没有考虑 **选项过多** 情况下的 纵向 排版，一般情况下多选项应使用 `<ElSelect />` 组件
* 添加了自定义的单行显示选项样式，`<ElRadioGroup />` 添加固定的 `class="option-group--block"` 即可
