import axios from 'axios';

const API_URL = 'http://localhost:3000';

function getAllProjets () {
    return axios.get(`${API_URL}/AllProjets`);
}


export default {
    getAllProjets,
};