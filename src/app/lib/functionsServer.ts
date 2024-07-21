"use server";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { getPlaiceholder } from "plaiceholder";
import { app } from "../firebase/config";
import {
  PanelProduct,
  PanelProductSlugTitle,
  PhotoCityDescription,
} from "../firebase/interface";
import { unstable_noStore } from "next/cache";

export default async function getBase64(imageUrl: string) {
  try {
    const res = await fetch(imageUrl);

    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
    }

    const buffer = await res.arrayBuffer();

    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    return base64;
  } catch (e) {
    if (e instanceof Error) console.log(e.stack);
  }
}

export async function GetStavbyPopis() {
  unstable_noStore();
  const db = getFirestore(app);

  try {
    const panelyCollectionRef = collection(db, "stavby_popisy");
    const querySnapshot = await getDocs(panelyCollectionRef);

    const panelyProducts: PhotoCityDescription[] = querySnapshot.docs.map(
      (doc) => ({
        foto: doc.data().foto,
        mesto: doc.data().mesto,
        popis: doc.data().popis,
        id: doc.id,
      })
    );

    return panelyProducts;
  } catch (error) {
    console.error("Error fetching photos:", error);
    return [];
  }
}

export async function GetPanely() {
  unstable_noStore();
  const db = getFirestore(app);

  try {
    const panelyCollectionRef = collection(db, "panely");
    const querySnapshot = await getDocs(panelyCollectionRef);

    const panelyProducts: PanelProductSlugTitle[] = querySnapshot.docs.map(
      (doc) => ({
        slug: doc.data().slug,
        nazov: doc.data().nazov,
      })
    );
    return panelyProducts;
  } catch (error) {
    return [];
  }
}

export async function GetCertainPanel(slug: string) {
  unstable_noStore();

  try {
    const db = getFirestore(app);
    const q = query(collection(db, "panely"), where("slug", "==", slug));
    const querySnapshot = await getDocs(q);

    const doc = querySnapshot.docs[0];
    const productData = doc.data() as PanelProduct;
    return {
      ...productData,
      id: doc.id,
    };
  } catch (error) {
    return;
  }
}

export async function GetStavbyPopisy() {
  unstable_noStore();
  const db = getFirestore(app);

  try {
    const panelyCollectionRef = collection(db, "stavby_popisy");
    const querySnapshot = await getDocs(panelyCollectionRef);

    const panelyProducts: PhotoCityDescription[] = querySnapshot.docs.map(
      (doc) => ({
        foto: doc.data().foto,
        mesto: doc.data().mesto,
        popis: doc.data().popis,
        id: doc.id,
      })
    );
    return panelyProducts;
  } catch (error) {
    return [];
  }
}
