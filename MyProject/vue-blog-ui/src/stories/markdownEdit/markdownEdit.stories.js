import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';






import markdownEdit from '../../components/markdownEdit/markdownEdit.vue';


storiesOf('markdown 编辑器', module)
.add('markdownEdit',()=>({
  components:{markdownEdit},
  template: '<markdown-edit></markdown-edit>',
}))