import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000"


function getAllSkills() {
  return axios.get(`${API_URL}/allSkills`)
}

function addSkills(skills) {
  return axios.post(`${API_URL}/addSkills`, skills)
}

function updateSkills(id, skills) {
  return axios.put(`${API_URL}/updateSkills/${id}`, skills)
}

function deleteSkills(id) {
  return axios.delete(`${API_URL}/deleteSkills/${id}`)
}

export default {
  getAllSkills,
  addSkills,
  updateSkills,
  deleteSkills,
}

