const doc = document;

fetch('json/virksomhedsdata.json')
  .then(function(response) {
    return response.json();
  })
  .then(json => {
    console.log(json);
    appendContent(json.Content);
  });

function appendContent(Content) {
    console.log(Content);
    //Laver data, HTML-tags der tilføjes til DOM'en - og indsættes i grid
    doc.querySelector(".content").innerHTML += `
      <div class="title">
          <h3>${Content.title}</h3>
          <p>${Content.name}</p>
      </div>
      `;
}

