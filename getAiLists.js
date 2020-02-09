var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=bernie&api-key=ngAuSZBToKWbflCjzZFyXn13GNkGrsUe"

function setup() {
  noCanvas();
  loadJSON(url, getData);
}

function getData(data) {
  var articles = data.response.docs;

  //loop to get all results from article articlesearch
  for (var i = 0; i < articles.length; i++){
    createElement('h1', articles[i].headline.main);
    createP(articles[i].snippet);
    createP(articles[i].lead_paragraph);
    createP(articles[i].web_url);
  }
}
