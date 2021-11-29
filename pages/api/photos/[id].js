import { photos } from "../../../photos";

export default function handler(req, res) {
  const { id } = req.query;

  const photo = photos.find((photo) => photo.id.toString() === id);

  if (photo) {
    res.status(200).json(photo);
  } else {
    res.status(404).json({ message: "Photo not found." });
  }
}
