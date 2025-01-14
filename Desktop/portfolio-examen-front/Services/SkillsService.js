import axios from "axios";

const API_URL = 'http://localhost:3000';

function getAllSkills() {
    return axios.get(`${API_URL}/AllSkills`);
}

export default {
    getAllSkills,
}