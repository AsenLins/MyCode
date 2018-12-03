import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import row from '../../../components/row/row.vue';

var dc=()=>({
  age:10
})
/*
等同于:

function dc(){

  return {
    age:10
  }
}

*/

console.log(dc);


/*注意这里用的是箭头函数 */
storiesOf('布局', module)
.add('row1',()=>(function(){
  console.log("row",row);
    console.log("the this",this);

}))
.add('row', () => ({
  
  components: { row },
  render(h){
    console.log("h",h);
    console.log("this",this);

var test=[
  <div>123</div>,
  <div>456</div>
];

    return <row><row>{test}</row></row>;
  }
}))
.add('第二个用法', () => ({
  components: { row },
  template: '<row><row></row></row>',

}));
