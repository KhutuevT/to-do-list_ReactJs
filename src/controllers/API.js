/* eslint-disable require-jsdoc */
import axios from "axios";
class API {
  URL = process.env.REACT_APP_LOCAL_URL;

  postCreateTaskUrl = `${this.URL}/createTask`;
  deleteTasksUrl = `${this.URL}/deleteTask`;
  getAllTasksUrl = `${this.URL}/allTasks`;
  patchUpdateTaskUrl = `${this.URL}/updateTask`;
  getOneTaskUrl = `${this.URL}/oneTask`;

  async addNewTask(title, text) {
    return await axios.post(this.postCreateTaskUrl, {
      title,
      text,
      isCheck: false,
    });
  }

  async deleteTask(id) {
    return await axios.delete(this.deleteTasksUrl, { params: { id } });
  }

  async getAllTasks() {
    return await axios.get(this.getAllTasksUrl);
  }

  async getOneTask(id) {
    return await axios.get(this.getOneTaskUrl, { params: { id } });
  }

  async updateTask(id, title, text) {
    return await axios.patch(this.patchUpdateTaskUrl, {
      id,
      title,
      text,
    });
  }

  async taskIsCheckUpdate(id, isCheck) {
    return await axios.patch(this.patchUpdateTaskUrl, {
      id,
      isCheck,
    });
  }
}

export default new API();
