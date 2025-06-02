import imageCompression from "browser-image-compression";
import { PhotoCityDescriptionBasic } from "../firebase/interface";

export async function CompressImage(file: File) {
  try {
    const options = {
      maxSizeMB: 1.5,
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

export const blur_url =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAYAAAC09K7GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAEklEQVR4nGO4d+/ef2TMQFAAAEr/Ky1dQF2/AAAAAElFTkSuQmCC";
