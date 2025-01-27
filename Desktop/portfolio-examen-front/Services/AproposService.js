import axios from 'axios';

const API_URL = 'http://localhost:3000';

function getAllPresentation () {
    return axios.get(`${API_URL}/allpresentation`);
}

function getAllIcons() {
    return axios.get(`${API_URL}/allIcons`); 
  }

  function addPresentation(Presentation){
    return axios.post(`${API_URL}/addPresentation`,Presentation);
  }

    function updatePresentation(id, presentation) {
    return axios.put(`${API_URL}/updatePresentation/${id}`, presentation);
  }

  function deletePresentation(id) {
    return axios.delete(`${API_URL}/deletePresentation/${id}`);
  }

export default {
    getAllPresentation,
    getAllIcons,
    addPresentation,
    updatePresentation,
    deletePresentation,
};