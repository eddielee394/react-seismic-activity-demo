import axios from "axios";

/**
 * API repository
 * @type {{getLocations: (function(): AxiosResponse<T>)}}
 */
const Api = {
  /**
   * Gets all location data
   * @return {Promise<AxiosResponse<T>>}
   */
  getLocations: () => axios.get("api/locations")
};

export default Api;
