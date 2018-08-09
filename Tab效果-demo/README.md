# 原生JS 与 jQuery 实现 Tab 效果

## DOM结构
```HTML
<div class="mod-tab">
  <div class="header">
    <div class="tab active">1</div>
    <div class="tab">2</div>
    <div class="tab">3</div>
    <div class="tab">4</div>
  </div>
  <div class="content">
    <div class="panel active">panel1</div>
    <div class="panel">panel2</div>
    <div class="panel">panel3</div>
    <div class="panel">panel4</div>
  </div>
</div>

<div class="mod-tab">
  <div class="header">
    <div class="tab active">1</div>
    <div class="tab">2</div>
    <div class="tab">3</div>
    <div class="tab">4</div>
  </div>
  <div class="content">
    <div class="panel active">panel1 <img src="imgs/1.jpg" alt=""></div>
    <div class="panel">panel2<img src="imgs/2.jpg" alt=""></div>
    <div class="panel">panel3<img src="imgs/3.jpg" alt=""></div>
    <div class="panel">panel4<img src="imgs/4.jpg" alt=""></div>
  </div>
</div>
```
## 原生JS
### 原生JS 实现思路
在遍历出来的 `.tab` 下做对应的事件绑定，点击事件发生，添加 `active` 样式。并取出被点击的 `.tab` 的下标值，然后再往上找对应的父级和父级邻居元素 `.panel` ，点击事件发生，添加 `active` 样式。

### 原生JS 实现代码
```JavaScript
//原生 JavaScript 方法
document.querySelectorAll('.mod-tab .tab').forEach(function(node){  // 遍历所有.tab
  node.addEventListener('click',function(){   //给每个.tab绑定事件
    var index   //在外部定义index中间量，闭包
    this.parentElement.querySelectorAll('.tab').forEach(function(tab, idx){  //找到.tab上面一个父级.header然后再筛选里面的所有.tab
      tab.classList.remove('active')   //移除他们的 active 样式
      if(node === tab){
        index = idx   //取出下标值
      }
    })
    this.classList.add('active')   //将点击的.tab添加 active 样式
    this.parentElement.nextElementSibling.querySelectorAll('.panel').forEach(function(panel){  //返回父级.header，再通过.nextElementSibling找到.content，并遍历所有的.panel
      panel.classList.remove('active')   //移除他们的 active 样式
    })
    this.parentElement.nextElementSibling.querySelectorAll('.panel')[index].classList.add('active')  //取之前拿到的下标index，并给.tab下标对应的.panel添加 active 样式
  })
})
```
## jQuery
### jQuery 实现思路
找到 `.tab` ，点击事件发生时，添加 `active` 样式，并给相邻的同级所有邻居都移除 `active` 样式。
找到 `.tab` 祖先中的 `.panel` ，找到 `.tab` 对应的下标序号的 `.panel` ，并添加 `active` 样式，并给 `.panel` 相邻的邻居都移除 `active` 样式。

### jQuery 实现代码
```JavaScript
//使用jQuery方法

$('.mod-tab .tab').on('click',function(){
  $(this).addClass('active')    //tab 点击事件发生时，添加 active 样式
         .siblings().removeClass('active')   //并给相邻的邻居都移除 active 样式

  $(this).parents('.mod-tab').find('.panel')  //并找到.tab祖先中的.panel
         .eq($(this).index()).addClass('active')  //找到.tab对应的下标序号的.panel，并添加 active 样式
         .siblings().removeClass('active')   //并给.panel相邻的邻居都移除 active 样式
})
```
