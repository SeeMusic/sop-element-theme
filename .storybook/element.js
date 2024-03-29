import Vue from 'vue';
import {
  Aside,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Cascader,
  CascaderPanel,
  Col,
  Collapse,
  CollapseItem,
  Container,
  Checkbox,
  CheckboxGroup,
  DatePicker,
  Dialog,
  Drawer,
  Form,
  FormItem,
  Header,
  Icon,
  Input,
  Loading,
  Main,
  Message,
  MessageBox,
  Option,
  OptionGroup,
  Pagination,
  Popover,
  Popconfirm,
  Radio,
  RadioGroup,
  RadioButton,
  Row,
  Select,
  Table,
  TableColumn,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Upload,
} from 'element-ui';

Vue.use(Aside);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Button);
Vue.use(Cascader);
Vue.use(CascaderPanel);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Col);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Container);
Vue.use(DatePicker);
Vue.use(Dialog);
Vue.use(Drawer);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Header);
Vue.use(Icon);
Vue.use(Input);
Vue.use(Main);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Pagination);
Vue.use(Popover);
Vue.use(Popconfirm);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Row);
Vue.use(Select);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Tag);
Vue.use(Tree);
Vue.use(Upload);

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;
