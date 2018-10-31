import axios from 'axios';

export default (options, callback) => {

  const api_url = window.api_url;
  const token = window.token;

  let axiosOptions = {
    method: options.method,
    url: api_url + options.url,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({...options.data}),
  };
  if(token) {
    axiosOptions.headers['Authorization'] = `Token ${token}`;
  }

  axios(axiosOptions)
    .then(response => callback(response))
    .catch(function (error) {
      console.log(error);
    });
}