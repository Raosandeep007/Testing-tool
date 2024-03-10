import prisma from "@/prisma";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  switch (req.method) {
    case "POST":
      try {
        const newTodo = await prisma.todo.create({
          data: req.body,
        });
        res.status(201).json(newTodo);
      } catch (error) {
        res.status(500).json({ error: "Failed to create todo" });
      }
      break;
    case "GET":
      if (typeof id !== "string") {
        res.status(400).json({ error: "Invalid ID format" });
        return;
      }

      try {
        const todo = await prisma.todo.findUnique({
          where: { id },
        });
        if (todo) {
          res.status(200).json(todo);
        } else {
          res.status(404).json({ error: "Todo not found" });
        }
      } catch (error) {
        res.status(500).json({ error: "Failed to get todo" });
      }
      break;
    default:
      res.status(405).json({ error: "Method not allowed" });
  }
}

export { handler as GET, handler as POST };
