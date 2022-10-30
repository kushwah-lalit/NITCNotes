function searchFiles(e){
  var Results = document.getElementById("searchResults");
    // allow only char and spaces
    let match = e.value.match(/^[a-zA-Z ]*/);
    // prevent leading spaces
    let match2 = e.value.match(/\s*/);
    if(match2[0] === e.value){
        Results.innerHTML = '';
        return;
    }
    if(match[0] === e.value){
        fetch('/search/documents',{
            method:'post',
            headers:{'content-type':'application/json'},
            body: JSON.stringify({payload:e.value})
        }).then(res => res.json()).then(data => {
            let payload = data.payload;
            console.log(payload);
            Results.innerHTML = '';
            if(payload.length<1){
                Results.innerHTML = '<a class="animate__animated animate__fadeInUp">No such File found :(</a>';
                return;   
            }
            payload.forEach((item) => {
                if(item.uploadWay === "Google Drive Link"){
                  Results.innerHTML += `<a class="animate__animated animate__fadeInUp" href="${item.downloadLink}" target="_blank" data-toggle="tooltip" data-placement="top" title="Download File">${item.name}</a>`;
                }else{
                  Results.innerHTML += `<a class="animate__animated animate__fadeInUp" href="/documents/download/${item._id}" data-toggle="tooltip" data-placement="top" title="Download File">${item.name}</a>`;
                }
            });
        });
        return;
    }
    Results.innerHTML = '';
}
function searchDocs(e){
    var Results = document.getElementById("searchResults");
      // allow only char and spaces
      let match = e.value.match(/^[a-zA-Z ]*/);
      // prevent leading spaces
      let match2 = e.value.match(/\s*/);
      if(match2[0] === e.value){
          Results.innerHTML = '';
          return;
      }
      if(match[0] === e.value){
          fetch('/search/inPublicDocuments',{
              method:'post',
              headers:{'content-type':'application/json'},
              body: JSON.stringify({payload:e.value})
          }).then(res => res.json()).then(data => {
              let payload = data.payload;
              console.log(payload);
              Results.innerHTML = '';
              if(payload.length<1){
                  Results.innerHTML = '<a class="animate__animated animate__fadeInUp">No such File found :(</a>';
                  return;   
              }
              payload.forEach((item) => {
                  if(item.uploadWay === "Google Drive Link"){
                    Results.innerHTML += `<a class="animate__animated animate__fadeInUp" href="${item.downloadLink}" target="_blank" data-toggle="tooltip" data-placement="top" title="Download File">${item.name}</a>`;
                  }else{
                    Results.innerHTML += `<a class="animate__animated animate__fadeInUp" href="/documents/download/${item._id}" data-toggle="tooltip" data-placement="top" title="Download File">${item.name}</a>`;
                  }
              });
          });
          return;
      }
      Results.innerHTML = '';
  }
