import axios from "axios";

export default {
  getRandomUsers: function() {
    return axios.get("https://randomuser.me/api/?inc=name,email,cell,id");
  }
};
