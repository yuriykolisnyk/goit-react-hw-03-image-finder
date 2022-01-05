const URL = `https://pixabay.com/api`;
const API_KEY = `key=24151327-c06d8001d7554d28ff7decb04`;

function fetchImages(name, page) {
  return fetch(
    `${URL}/?q=${name}&page=${page}&${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error('No response from server'));
  });
}

const api = { fetchImages };

export default api;
