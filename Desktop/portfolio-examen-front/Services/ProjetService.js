import axios from 'axios';

const API_URL = "http://192.168.1.16:3000";

function getAllProjets () {
    return axios.get(`${API_URL}/AllProjets`);
}

function addProjet (projet) {
    return axios.post(`${API_URL}/addProjet`, projet);
}

    function updateProjet (id, projet) {
    return axios.put(`${API_URL}/updateProjet/${id}`, projet);
  }

  function deleteProjet (id) {
    return axios.delete(`${API_URL}/deleteProjet/${id}`);
  }
export default {
    getAllProjets,
    addProjet,
    updateProjet,
    deleteProjet,
};