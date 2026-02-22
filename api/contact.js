global.leads = global.leads || [];

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST allowed" });
  }

  const { name, email, message } = req.body;

  console.log("NEW LEAD:", name, email, message);

  global.leads.push({ name, email, message });

  return res.status(200).json({ success: true });
}
