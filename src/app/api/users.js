export default function handler(req, res) {
  // 模擬一個使用者清單
  const users = [
    { id: 1, name: "Alice", role: "admin" },
    { id: 2, name: "Bob", role: "user" },
  ];

  if (req.method === "GET") {
    res.status(200).json(users); // 返回所有使用者
  } else {
    res.status(405).json({ message: "Method Not Allowed" }); // 禁止非 GET 請求
  }
}
