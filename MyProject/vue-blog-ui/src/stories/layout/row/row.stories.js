import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import row from '../../../components/row/row.vue';

storiesOf('布局', module)
.add('row', () => ({
  components: { row },
  render(h){
    console.log("h",h);
    return <row><row></row></row>;
  }
}))
.add('第二个用法', () => ({
  components: { row },
  template: '<row><row></row></row>',

}))

;
