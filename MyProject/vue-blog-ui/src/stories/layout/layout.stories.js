import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';


import '../demo.scss';
import '../../components/style/index.scss';

import fencesView from './fences.vue';
import inlineView from './inline.vue';
import flexView from './flex.vue';
import flex2View from './flex2.vue';

/*注意这里用的是箭头函数 */
storiesOf('布局', module)
.add('栅栏布局',()=>({
  components:{fencesView},
  template: '<fencesView />',
}))
.add('行布局',()=>({
  components:{inlineView},
  template: '<inlineView />',
}))
.add('flex布局',()=>({
  components:{flexView},
  template: '<flexView />',
}))
.add('flex布局2',()=>({
  components:{flex2View},
  template: '<flex2View />',
}))

/*
.add('row', () => ({
  components: {'bl-row':row,'bl-col':col},
  render(){
    return <bl-row>
          <bl-col>col1</bl-col>
          <bl-col>col2</bl-col>
          <bl-col>col3</bl-col>
          <bl-col>col4</bl-col>
          <bl-col>col5</bl-col>
          <bl-col>col6</bl-col>
          <bl-col>col7</bl-col>
          <bl-col>col8</bl-col>
      </bl-row>;
  }
}))
*/
