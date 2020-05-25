import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID eZdmc2nRPd6TdFMWmvsZ81eNi21hMNNaV7PEHKqSnlA'
  }
});