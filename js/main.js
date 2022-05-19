var leftList = document.getElementById('list1');
var rightList = document.getElementById('list2');
var box = document.querySelector('.box');
var leftListLi = document.querySelectorAll('#list1 li');
var rightListLi = document.querySelectorAll('#list2 li')


leftListLi.forEach(elem=>{
    elem.addEventListener('dragstart',function(e){
        e.dataTransfer.setData('dataId',elem.getAttribute('data-id'));
    })
})


rightListLi.forEach(elem=>{
    elem.addEventListener('dragstart',function(e){
        e.dataTransfer.setData('dataId',elem.getAttribute('data-id'));
    })
})


leftList.addEventListener('dragover',function(e){
    e.preventDefault();
})


rightList.addEventListener('dragover',function(e){
    e.preventDefault();
})


box.addEventListener('dragover',function(e){
    e.preventDefault();
})


leftList.addEventListener('drop',function(e){
    let dataId = e.dataTransfer.getData('dataId');
    let leftLi = document.querySelector('[data-id="'+dataId+'"]');
    leftList.appendChild(leftLi);
})


rightList.addEventListener('drop',function(e){
    let dataId = e.dataTransfer.getData('dataId');
    // console.log(dataId)
    let li = document.querySelector('[data-id="'+dataId+'"]');
    rightList.appendChild(li);
})


box.addEventListener('drop',function(e){

    let pEl = document.createElement('p');
    pEl.classList.add('pEl');
    let dataId = e.dataTransfer.getData('dataId');
    let boxLi = document.querySelector('[data-id="'+dataId+'"]');
    pEl.innerText = boxLi.innerText;
    box.appendChild(pEl);
    boxLi.remove();
})