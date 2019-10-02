import axios from "axios";
import MockAdapter from "axios-mock-adapter";

/**
 * Instantiates a new MockAdapter instance
 * @type {MockAdapter}
 */
const mock = new MockAdapter(axios, { delayResponse: 750 });
export default mock;
