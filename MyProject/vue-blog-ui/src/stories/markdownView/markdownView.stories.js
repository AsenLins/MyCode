import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';






import markdownView from '../../components/markdownView/markdownView.vue';


storiesOf('markdown 编辑器', module)
.add('markdownPanel',()=>({
  components:{markdownView},
  template: '<markdown-view></markdown-view>',
}))