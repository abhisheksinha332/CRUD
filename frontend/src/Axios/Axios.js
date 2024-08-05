import axios from 'axios'


export default  Axios = () => {
    const instance = axios.create({
        baseURL: 'http://localhost:5000',
        // other configurations if needed
    });

    return { instance };
};
