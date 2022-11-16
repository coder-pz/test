import { App } from 'vue';
import {
  Button,
  Toast,
  Tabs,
  TabPane,
  Icon,
  Sticky,
  Swiper,
  SwiperItem,
  Checkbox,
  CheckboxGroup,
} from '@nutui/nutui-taro';

const components = [
  Button,
  Toast,
  Tabs,
  TabPane,
  Icon,
  Sticky,
  Swiper,
  SwiperItem,
  Checkbox,
  CheckboxGroup,

];
export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component);
  }
}
