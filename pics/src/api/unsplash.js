import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 39062b22c5d14d41bacbe5a5e6bbbca1d8e139b93098c0004c3c7aaf06d82335'
    }
});