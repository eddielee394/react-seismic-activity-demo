import mock from "../mock";

const locationData = [
  {
    id: 1,
    location: "a",
    y: 36.80638477380125,
    x: 39.4449153947703,
    magnitude: 5.8,
    depth: 4
  },

  {
    id: 2,
    location: "c",
    y: 92.72378114627274,
    x: 85.19150475473184,
    magnitude: 8.0,
    depth: 2
  },

  {
    id: 3,
    location: "b",
    y: 6.307027617647912,
    x: 65.97939639324936,
    magnitude: 9.0,
    depth: 4
  },

  {
    id: 4,
    location: "a",
    y: 37.45016534487874,
    x: 38.49627026221381,
    magnitude: 1.0,
    depth: 1
  },

  {
    id: 5,
    location: "d",
    y: 15.81937888166879,
    x: 30.107143522811732,
    magnitude: 3.4,
    depth: 1
  },

  {
    id: 6,
    location: "b",
    y: 4.697501854713504,
    x: 65.12057699689227,
    magnitude: 3.3,
    depth: 1
  },

  {
    id: 7,
    location: "f",
    y: 49.72539249123659,
    x: 67.9858657771189,
    magnitude: 3.7,
    depth: 1
  },

  {
    id: 8,
    location: "f",
    y: 49.31328972292483,
    x: 68.09402623068067,
    magnitude: 1.1,
    depth: 2
  },

  {
    id: 9,
    location: "e",
    y: 38.18290046154109,
    x: 81.71360463623895,
    magnitude: 2.1,
    depth: 2
  },

  {
    id: 10,
    location: "f",
    y: 49.79353997764336,
    x: 68.01373401680416,
    magnitude: 1.4,
    depth: 5
  },

  {
    id: 11,
    location: "d",
    y: 15.556831287795688,
    x: 30.77308955210717,
    magnitude: 3.4,
    depth: 2
  },

  {
    id: 12,
    location: "d",
    y: 15.887178087020478,
    x: 30.756777903530697,
    magnitude: 4.6,
    depth: 4
  },

  {
    id: 13,
    location: "g",
    y: 4.759693693983893,
    x: 48.78450141787685,
    magnitude: 5.4,
    depth: 1
  },

  {
    id: 14,
    location: "c",
    y: 91.20786702227447,
    x: 86.86112435683953,
    magnitude: 7.1,
    depth: 1
  },

  {
    id: 15,
    location: "d",
    y: 16.706632368872377,
    x: 30.57634811456861,
    magnitude: 2.0,
    depth: 1
  }
];
mock.onGet("/api/locations").reply(config => {
  return [200, locationData];
});
