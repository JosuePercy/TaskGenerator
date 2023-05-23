import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";
import { Entry, IEntry } from "../../../../../models";
import { db } from "../../../../../database";

type Data = { message: string } | IEntry;

function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  console.log(req.query);

  const { id } = req.query;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: "El id no es valido " + id });
  }

  switch (req.method) {
    case "PUT":
      return updateEntry(req, res);
    case "GET":
      return getEntry(req, res);

    case "DELETE":
      return deleteEntry(req, res);
    default:
      return res.status(400).json({ message: "Método no existe" });
  }
}

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;

  await db.connect();

  const entryToUdapte = await Entry.findById(id);

  if (!entryToUdapte) {
    await db.disconnect();
    return res.status(400).json({ message: "No hay entrada cone se ID " + id });
  }

  const {
    description = entryToUdapte.description,
    status = entryToUdapte.status,
  } = req.body;

  try {
    const updateEntry = await Entry.findByIdAndUpdate(
      id,
      { description, status },
      { runValidators: true, new: true }
    );
    await db.disconnect;
    res.status(200).json(updateEntry!);
  } catch (error: any) {
    await db.disconnect;

    res.status(400).json({ message: error.errors.status.message });
  }
};

const getEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;

  await db.connect();
  const entryInDB = await Entry.findById(id);
  await db.disconnect();

  if (!entryInDB) {
    return res
      .status(400)
      .json({ message: "No hay peticion encontrada con ese ID " + id });
  }
  return res.status(200).json(entryInDB);
};

const deleteEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  console.log("entre en el api/entries/id/index.ts");
  const { id } = req.query;

  await db.connect();
  const entryDBTodelete = await Entry.findByIdAndDelete(id);
  await db.disconnect();

  if (!entryDBTodelete) {
    return res.status(400).json({ message: "No hay entrada con ese id " + id });
  }

  return res.status(200).json(entryDBTodelete);
};

export default handler;
