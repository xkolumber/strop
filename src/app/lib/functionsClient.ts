import imageCompression from "browser-image-compression";
import { PhotoCityDescriptionBasic } from "../firebase/interface";

export async function CompressImage(file: File) {
  try {
    const options = {
      maxSizeMB: 2,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };

    const compressedFile = await imageCompression(file, options);
    return compressedFile;
  } catch (error) {
    return null;
  }
}

export function getCity(
  cities: PhotoCityDescriptionBasic[],
  id: string | null
) {
  if (id === null) {
    return "";
  }
  const city_name = cities.find((item) => item.id === id);

  if (city_name) {
    return city_name.mesto;
  } else {
    return "";
  }
}
