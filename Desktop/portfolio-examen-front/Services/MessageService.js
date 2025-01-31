import axios from "axios";

const API_URL = "http://192.168.1.16:3000";

function sendContact(data) {
  return axios.post(`${API_URL}/contact`, data);
}

function getAllMessages() {
  return axios.get(`${API_URL}/AllMessages`);
}

function deleteMessage(idMessage) {
  return axios.delete(`${API_URL}/deleteMessage/${idMessage}`);
}

export default {
  deleteMessage,
  sendContact,
  getAllMessages,
};