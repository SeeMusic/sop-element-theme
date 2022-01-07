* 出于多语言切换时，label 文本宽度不定的考虑，目前前台交互规范基本只用到了 **顶对齐、非行内模式**  `labelPosition: 'top'; inline: false` 的模式。其他场景并未做全部适配
* 封装了 `<ElFormItem />` 内使用的 tips 区域样式，直接使用 `<div class="sd-form-item--more"></div>` 即可