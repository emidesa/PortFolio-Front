import axios from 'axios';

const API_URL = 'http://localhost:3000';

function getAllPresentation () {
    return axios.get(`${API_URL}/Allpresentation`);
}

export default {
    getAllPresentation,
};