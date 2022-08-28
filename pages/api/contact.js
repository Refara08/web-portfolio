import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "GET") {
    res.status(201).json({ message: "you get what You GET" });
  }

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

    let client;

    try {
      client = await MongoClient.connect(
        "mongodb+srv://refara08:Angrybird08@cluster0.hbvbq.mongodb.net/?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500).json({ message: "failed to connect" });
    }

    const db = client.db("portfolio-contact");

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "storing message failed!" });
    }

    client.close();

    res
      .status(201)
      .json({ message: "Your message has been sent!", data: newMessage });
  }
}
