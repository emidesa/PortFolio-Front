import axios from "axios";

const API_URL = 'http://localhost:3000';

function getAllParcours() {
    return axios.get(`${API_URL}/allParcours`);
}

function addParcours(parcours) {
    return axios.post(`${API_URL}/addParcours`, parcours); 
}

    function updateParcours(id, parcours) {
    return axios.put(`${API_URL}/updateParcours/${id}`, parcours);
  }

  function deleteParcours(idParcours) {
    return axios.delete(`${API_URL}/deleteParcours/${idParcours}`);
  }
export default {
    getAllParcours,
    addParcours,
    updateParcours,
    deleteParcours,
}