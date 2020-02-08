fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=bernie&api-key=ngAuSZBToKWbflCjzZFyXn13GNkGrsUe')

.then(response => {
  return response.json()
})

.then(data => {
  console.log(data.response.docs[0].headline.main)
  console.log(data.response.docs[0].snippet)
})

.catch(err => {
  //error out
})
