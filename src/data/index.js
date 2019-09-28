import mock from "./mock";
import "./db/locationData";

//mock requests on any requested routes
mock.onAny().passThrough();
