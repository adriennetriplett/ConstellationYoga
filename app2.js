const url = 'https://api.nasa.gov/planetary/apod?api_key='
const api_key = config.NASA_API_KEY

const fetchNASAData = () => {
		const response = fetch(`${url}${api_key}`);
		const data = response.json();
		console.log('NASA APOD data', data);
		displayData(data);
}

const displayData = data => {
	document.getElementById('title').textContent = data.title
	document.getElementById('date').textContent = data.date
	document.getElementById('picture').src = data.hdurl
}

fetchNASAData()