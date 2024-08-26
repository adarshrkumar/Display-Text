if (Boolean(location.href.split('?')[1]) === true) {
  let text = location.href.split('?')[1]
  let isMath
  while (Boolean(text.includes('%20')) === true) {
    text = text.replace('%20', ' ')
  }
  while (Boolean(text.includes('%7B')) === true) {
    text = text.replace('%7B', '{')
  }
  while (Boolean(text.includes('%7D')) === true) {
    text = text.replace('%7D', '}')
  }
  while (Boolean(text.includes('%E2%88%92')) === true) {
    text = text.replace('%E2%88%92', '−')
  }
  if (Boolean(text.includes('−')) === true) {
    document.title = 'Math'
    isMath = true
  }
  if (Boolean(text.includes('*')) === true) {
    document.title = 'Math'
    isMath = true
  }
  if (Boolean(text.includes('sin')) === true) {
    document.title = 'Math'
    isMath = true
  }
  if (Boolean(text.includes('cos')) === true) {
    document.title = 'Math'
    isMath = true
  }
  if (Boolean(text.includes('tan')) === true) {
    document.title = 'Math'
    isMath = true
  }
  if (Boolean(text.includes('csc')) === true) {
    document.title = 'Math'
    isMath = true
  }
  if (Boolean(text.includes('sec')) === true) {
    document.title = 'Math'
    isMath = true
  }
  if (Boolean(text.includes('cot')) === true) {
    document.title = 'Math'
    isMath = true
  }
  if (Boolean(isMath) !== false) {
    let textS = text.split(' / ')
    let teext = ''
    var i = 0
    textS.forEach(tect => {
      if (i < textS.length) {
        teext = teext + tect + '<b> / </b>'
        i++
      }
    })
    text = teext.split('').length - 8
    text = teext.substr(text)
    teext = teext.split(text)
    text = ''
    i = 0
    teext.forEach(teex => {
      if (i < teext.length) {
        text = text + teex + '<b> / </b>'
      }
    })

  document.body.innerHTML = text.split('<b> / </b><b> / </b>')[0].split(',')[0]
}}