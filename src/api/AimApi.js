import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3000";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class AimApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${AimApi.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get the current user. */

  static async getCurrUser(username) {
    let res = await this.request(`users/${username}`);
    return res;
  }

  /** Get token for LoginPage from username, password. */

  static async LoginPage(data) {
    let res = await this.request(`users/LoginPage`, data, "post");
    return res.token;
  }

  /** Signup for site. */

  static async signup(data) {
    let res = await this.request(`users/signup`, data, "post");
    return res.token;
  }

  /** Save user ProfilePage page. */

  static async saveProfilePage(username, data) {
    let res = await this.request(`users/${username}`, data, "patch");
    return res.user;
  }

  static async setReward(data) {
    let res = await this.request(`rewards`, data, "post");
    return res;
  }
}

export default AimApi;
