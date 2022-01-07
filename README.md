# sop-element-theme

SOP 系统自定义 ElementUI 样式。仅提供 SCSS 文件及相关资源；使用 `storybook` 做控件样式预览

目前版本依赖：
* `ElementUI` 2.4.5+
* `@storybook/vue` 6.4.9

> ElementUI 2.15.6 有一些破坏式的 DOM 结构修改，此处直接做了额外的覆写。

其他依赖：

一些组件内置的 icon 使用了公司自己设计的 icon 替换，所以需要引用在线的 webfont。

当前版本为 `//at.alicdn.com/t/font_2086495_xn38jpqufm.css`

## 使用方式
参见 [在项目中改变 SCSS 变量](https://element.eleme.cn/#/zh-CN/component/custom-theme#zai-xiang-mu-zhong-gai-bian-scss-bian-liang)，引入 element 时引用 scss 入口文件 `index.scss` 即可。示例：

```
import Vue from 'vue';
import {
  Button,
  // ...
  // 你需要按需加载的组件
} from 'element-ui';
import '@seemusic/sop-element-theme/src/index.scss';
```

## 本地预览

```
npm run storybook:serve
```

## 打包为静态文件

```
npm run storybook:build
```

## 组件列表

- [x] Button
- [x] Cascader
- [x] Checkbox
- [x] CheckboxGroup
- [x] Collapse
- [x] CollapseItem
- [x] DatePicker
- [x] Drawer
- [x] Form
- [x] Input
- [x] Messagebox
- [x] Pager
- [x] Popconfirm
- [x] Popover
- [x] Radio
- [x] RadioButton
- [x] RadioGroup
- [x] Select
- [x] Table
- [x] Tabs
- [x] Tag
