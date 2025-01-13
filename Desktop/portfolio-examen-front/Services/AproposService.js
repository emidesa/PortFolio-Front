import axios from 'axios';

const API_URL = 'http://localhost:3000';

function getAllPresentation () {
    return axios.get(`${API_URL}/Allpresentation`);
}

function getAllIcons() {
    return axios.get(`${API_URL}/allIcons`); // Récupérer toutes les icônes, sans paramètre
  }

export default {
    getAllPresentation,
    getAllIcons,
};