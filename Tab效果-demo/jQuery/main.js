//使用jQuery方法

$('.mod-tab .tab').on('click',function(){
  $(this).addClass('active')    //tab 点击事件发生时，添加 active 样式
         .siblings().removeClass('active')   //并给相邻的邻居都移除 active 样式

  $(this).parents('.mod-tab').find('.panel')  //并找到.tab祖先中的.panel
         .eq($(this).index()).addClass('active')  //找到.tab对应的下标序号的.panel，并添加 active 样式
         .siblings().removeClass('active')   //并给.panel相邻的邻居都移除 active 样式
})
