import BasicQueries from "./BasicQueries";

//Service must be running for these to pass
describe("Basic Queries", () => {
  test("the findAll endpoint should return", () => {
    return BasicQueries.findAll().then((data) => {
      expect(data).toStrictEqual(["get", "mapping", "find", "all"]);
    });
  });

  test("the findById endpoint should return", () => {
    return BasicQueries.findById(1).then((data) => {
      expect(data).toStrictEqual("get by Id reached : 1");
    });
  });

  test("the create endpoint should return", () => {
    return BasicQueries.create("Created Object").then((data) => {
      expect(data).toStrictEqual('create reached : "Created Object"');
    });
  });

  test("the update endpoint should return", () => {
    return BasicQueries.update(2, "updated object").then((data) => {
      expect(data).toStrictEqual("");
    });
  });

  test("the deleteById endpoint should return", () => {
    return BasicQueries.deleteById(3).then((data) => {
      expect(data).toStrictEqual("");
    });
  });
});
