export async function GET(request) {
  console.log("GET request", request);
  const users = [
    { id: 1, name: "Alice", card: "12345" },
    { id: 2, name: "Bob", card: "67890" },
  ];

  return new Response(JSON.stringify(users), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request) {
  const data = await request.json();

  return new Response(JSON.stringify({ message: "User added!", data }), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
