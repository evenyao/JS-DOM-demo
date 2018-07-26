var addBtn = document.querySelector('#add')
var removeBtn = document.querySelector('#remove')
var toggle1Btn = document.querySelector('#toggle1')
var toggle2Btn = document.querySelector('#toggle2')
var boxPanel = document.querySelector('.box')

addBtn.onclick = function(){
  boxPanel.classList.add('active')
}

removeBtn.onclick = function(){
  boxPanel.classList.remove('active')
}

toggle1Btn.onclick = function(){
  if(boxPanel.classList.contains('active')){
    boxPanel.classList.remove('active')
  }else{
    boxPanel.classList.add('active')
  }
}

//效果等同于上面一个，但代码更简洁
toggle2Btn.onclick = function(){
  boxPanel.classList.toggle('active')
}
