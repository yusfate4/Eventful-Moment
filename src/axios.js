import axios from 'axios'



axios.defaults.baseURL = 'https://eventful-moments.onrender.com/api/v1/users/';
axios.defaults.headers.common['Authorization'] = 'Bear ' + localStorage.getItem('token')