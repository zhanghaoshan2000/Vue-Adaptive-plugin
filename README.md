## Vue屏幕自适应插件 

针对数据可视化大屏设计

引入方法：

```JavaScript
npm i xiangyang-ui-sacle
```

示例：



![img](https://img-blog.csdnimg.cn/19e0385ca92749278b7ada8ec3dd6058.gif)



如图：

使用方法：

在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import Scale from 'xiangyang-scale'
import 'xiangyang-scale/xiangyang-ui.css'
Vue.use(Scale)
new Vue({
  el: '#app',
  render: h => h(App)
});
```

在所要自适应的页面使用

```vue
<template>
  <div>
    <ScaleBox>
      内容
    </ScaleBox>
    </div>
</template>
```

默认比例16：9  1920 * 1080

调节觉得两边空出太多

我们可以通过props 传递给插件宽高来解决空出太多的问题以及比例问题

```vue
<template>
  <div>
    <ScaleBox :width="2100" :height="1080">
      内容
    </ScaleBox>
    </div>
</template>
```

