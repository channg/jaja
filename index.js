import localforage from 'localforage'
export function save() {
  let body = document.body.innerHTML
  if(!body)
    return
  let firstScriptIndex = body.indexOf('<script')
  let domNoScript = body.substr(0, firstScriptIndex)
  if(!domNoScript)
    return
  localforage.setItem(location.href, domNoScript)
}

function lo() {
  localforage.getItem(location.href).then(function (value) {
    console.log(value)
    if (value) {
      document.body.innerHTML = value
    }
  })
}

lo()
