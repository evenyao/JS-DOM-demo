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
