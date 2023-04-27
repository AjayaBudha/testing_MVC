const request = require("supertest");
const app = require("../app");

describe("api server", () => {
  let api;

  beforeAll(() => {
    api = app.listen(5000, () => {
      console.log("testing the server on port 5000");
    });
  });

  afterAll(() => {
    console.log("gracefully stopping test server");
    // done is used to stop async await
    api.close(done);
  });
});
