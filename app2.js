// Vanilla JS
const url = 'https://api.nasa.gov/planetary/apod?api_key=';
const api_key = config.NASA_API_KEY;

const apod_img_id = document.getElementById('apod_img_id');
const apod_vid_id = document.getElementById('apod_vid_id');
const reqObject = document.getElementById('reqObject');
const returnObject = document.getElementById('returnObject');
const apod_title = document.getElementById('apod_title');

function loadXMLDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      let result = JSON.parse(this.response);
      if (result.media_type === 'video') {
        apod_img_id.style.display = 'none';
        apod_vid_id.src = result.url;
      } else {
        apod_vid_id.style.display = 'none';
        apod_img_id.src = result.url;
      }
      reqObject.innerText = url;
      returnObject.innerText = JSON.stringify(result, null, 4);
      apod_title.innerText = result.title;
    }
  };
  xhttp.open('GET', url, true);
  xhttp.send();
}

loadXMLDoc();

// CoffeeScript + jQuery

// handleResult = (result) ->
//   if result.media_type == 'video'
//     $('#apod_img_id').css 'display', 'none'
//     $('#apod_vid_id').attr 'src', result.url
//   else
//     $('#apod_vid_id').css 'display', 'none'
//     $('#apod_img_id').attr 'src', result.url
//   $('#reqObject').text url
//   $('#returnObject').text JSON.stringify(result, null, 4)
//   $('#apod_explanation').text result.explanation
//   $('#apod_title').text result.title
//   return

// $.ajax
//   url: url
//   success: handleResult
