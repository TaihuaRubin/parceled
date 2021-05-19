(async function widget () {
  const data = await fetch('https://resilia-review-pr-533.herokuapp.com/nonprofit/1').then(res=> res.json())

  const container = document.querySelector('#resilia-container')
  
  const el = container?.append('MY NAME IS TAIHUA')
})()
