import {save} from './index'
window.setTimeout(function () {
  let htm = ''
  $.get('https://www.apiopen.top/novelApi', function ({data}) {
    data.forEach((item)=>{
      htm+= `<div class="book"><img src="${item.book_cover}"></div>`
      document.getElementById('kakak').innerHTML=htm
    })
    save()
  })
},2000)
