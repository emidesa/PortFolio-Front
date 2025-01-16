import axios from "axios";

const API_URL = 'http://localhost:3000';

function getAllParcours() {
    return axios.get(`${API_URL}/allParcours`);
}

export default {
    getAllParcours,
}