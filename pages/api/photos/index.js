import { photos } from "../../../photos";

export default function handler(req, res) {
  res.status(200).json(photos);
}
