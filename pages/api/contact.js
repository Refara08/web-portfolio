export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (
      !name ||
      name.trim() === "" ||
      !email ||
      !email.includes("@") ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    const newMessage = {
      name,
      email,
      message,
    };

    console.log(newMessage);

    res
      .status(201)
      .json({ message: "Your message has been sent!", data: newMessage });
  }
}
