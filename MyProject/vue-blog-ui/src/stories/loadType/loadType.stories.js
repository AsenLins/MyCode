import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';




import vue from 'vue';
import '../../components/style/index.scss';
import blogUI from '../../components/index.js';

vue.use(blogUI);

storiesOf('安装', module)
.add('全局引入',()=>({
  template: '<bl-row><bl-col>全局引入</b-col></bl-row>',
}))