(async function widget () {
  const data = await fetch('https://resilia-review-pr-533.herokuapp.com/nonprofit/1')
  document.getElementById('root').apend(data)
})()
