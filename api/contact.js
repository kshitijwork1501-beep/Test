export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST allowed" });
  }

  const { name, email, message } = req.body;

  console.log("NEW LEAD RECEIVED:");
  console.log(name, email, message);

  return res.status(200).json({ success: true });
}
