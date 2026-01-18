test("GET to /api/v1/status should return 200", async () => {
  const res = await fetch("http://localhost:3000/api/v1/status");
  expect(res.status).toBe(200);

  const responseBody = await res.json();
  const parsedDate = new Date(responseBody.update_at).toISOString();
  expect(responseBody.update_at).toEqual(parsedDate);

  expect(responseBody.dependencies.database.version).toEqual("18.1");
  expect(responseBody.dependencies.database.max_connections).toEqual(100);
  expect(responseBody.dependencies.database.opened_connections).toEqual(1);
});
