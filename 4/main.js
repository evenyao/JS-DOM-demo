var addBtn = document.querySelector('#add')
var removeBtn = document.querySelector('#remove')
var toggle1Btn = document.querySelector('#toggle1')
var toggle2Btn = document.querySelector('#toggle2')
var boxPanel = document.querySelector('.box')

// 实现增加.active的css样式
// onclick方法
// addBtn.onclick = function(){
//   boxPanel.classList.add('active')
// }
// addEventListener方法，效果等同于onclick方法
addBtn.addEventListener('click',function(){
  boxPanel.classList.add('active')
})


// 实现移除.active的css样式
// onclick方法
// removeBtn.onclick = function(){
//   boxPanel.classList.remove('active')
// }
// addEventListener方法，效果等同于onclick方法
removeBtn.addEventListener('click',function(){
  boxPanel.classList.remove('active')
})


// 实现切换css样式
// onclick方法
// toggle1Btn.onclick = function(){
//   if(boxPanel.classList.contains('active')){
//     boxPanel.classList.remove('active')
//   }else{
//     boxPanel.classList.add('active')
//   }
// }
// addEventListener方法，效果等同于onclick方法
toggle1Btn.addEventListener('click',function(){
  if(boxPanel.classList.contains('active')){
    boxPanel.classList.remove('active')
  }else{
    boxPanel.classList.add('active')
  }
})


//效果等同于上面一组，也分为onclick方法和addEvenListener方法，但代码更简洁
// onclick方法
// toggle2Btn.onclick = function(){
//   boxPanel.classList.toggle('active')
// }
// addEventListener方法，效果等同于onclick方法
toggle2Btn.addEventListener('click',function(){
  boxPanel.classList.toggle('active')
})
