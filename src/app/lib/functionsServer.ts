"use server";

import { getFirestore as getFirestoreAdmin } from "firebase-admin/firestore";

import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  limit,
  query,
  where,
} from "firebase/firestore";
import { getPlaiceholder } from "plaiceholder";
import { app } from "../firebase/config";
import { firestore } from "../firebase/configServer";
import {
  Email,
  PanelProduct,
  PanelProductHomePage,
  PanelProductSlugTitle,
  PhotoCityDescription,
  PhotoCityDescriptionBasic,
} from "../firebase/interface";
import { client } from "../sanity-setting/sanity";

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
        fotky: doc.data().fotky,
      })
    );

    return panelyProducts;
  } catch (error) {
    console.error("Error fetching photos:", error);
    return [];
  }
}

export async function GetStavyBasic() {
  const db = getFirestore(app);

  try {
    const panelyCollectionRef = collection(db, "stavby_popisy");
    const querySnapshot = await getDocs(panelyCollectionRef);

    const panelyProducts: PhotoCityDescriptionBasic[] = querySnapshot.docs.map(
      (doc) => ({
        foto: doc.data().foto,
        mesto: doc.data().mesto,
        id: doc.id,
        popis: doc.data().fotky,
      })
    );

    return panelyProducts;
  } catch (error) {
    console.error("Error fetching photos:", error);
    return [];
  }
}

export async function GetFirstProject(): Promise<PhotoCityDescription | null> {
  const db = getFirestore(app);

  try {
    const panelyCollectionRef = collection(db, "stavby_popisy");
    const q = query(panelyCollectionRef, limit(1));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      const data = doc.data();

      const result: PhotoCityDescription = {
        foto: data.foto || "",
        mesto: data.mesto || "",
        popis: data.popis || "",
        id: doc.id,
        fotky: doc.data().fotky,
      };

      return result;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching first photo:", error);
    return null;
  }
}

export async function GetProjectById(
  id: string
): Promise<PhotoCityDescription | null> {
  const db = getFirestore(app);

  try {
    const docRef = doc(db, "stavby_popisy", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      const result: PhotoCityDescription = {
        foto: data.foto || "",
        mesto: data.mesto || "",
        popis: data.popis || "",
        id: docSnap.id,
        fotky: data.fotky,
      };

      return result;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching project by ID:", error);
    return null;
  }
}

export async function GetPanely() {
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
    const final_data = panelyProducts.sort((a, b) => {
      return Number(a.slug) - Number(b.slug);
    });

    return final_data;
  } catch (error) {
    return [];
  }
}

export async function GetCertainPanel(slug: string) {
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
    throw new Error();
  }
}

export async function GetStavbyPopisy() {
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
        fotky: doc.data().fotky,
      })
    );
    return panelyProducts;
  } catch (error) {
    return [];
  }
}

export async function GetHomePagePanels() {
  const db = getFirestore(app);

  try {
    const panelyCollectionRef = collection(db, "panely");
    const querySnapshot = await getDocs(panelyCollectionRef);

    const panelyProducts: PanelProductHomePage[] = querySnapshot.docs.map(
      (doc) => ({
        foto: doc.data().foto,
        nazov: doc.data().nazov,
        popis1: doc.data().popis1,
        popis2: doc.data().popis2,
        slug: doc.data().slug,
        id: doc.id,
      })
    );

    return panelyProducts;
  } catch (error) {
    console.error("Error fetching photos:", error);
    return [];
  }
}

export async function GetEmails() {
  try {
    const emailsCollectionRef = firestore.collection("emaily");
    const querySnapshot = await emailsCollectionRef.get();
    const emails: Email[] = querySnapshot.docs.map((doc) => ({
      email: doc.data().email,
      linky: doc.data().linky,
      datum: doc.data().datum,
    }));

    emails.sort(
      (a, b) => new Date(b.datum).getTime() - new Date(a.datum).getTime()
    );

    return emails;
  } catch (error) {
    return [];
  }
}

export async function GetThreeBlogs() {
  try {
    const query = `*[_type == "blog"] | order(_createdAt desc) [0...50]`;
    const allData = await client.fetch(query);

    const shuffledData = allData.sort(() => 0.5 - Math.random());
    const data = shuffledData.slice(0, 3);

    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function GetAllBlogs() {
  try {
    const query = `*[_type == "blog"] | order(_createdAt desc)`;
    const data = await client.fetch(query);

    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function GetBlogBySlug(slug: string) {
  try {
    const query = `*[_type == "blog" && slug.current =="${slug}"][0]`;
    const data = await client.fetch(query);

    return data;
  } catch (error) {
    return null;
  }
}

export async function GetPanelyClient() {
  const db = getFirestore(app);

  try {
    const panelyCollectionRef = collection(db, "panely");
    const querySnapshot = await getDocs(panelyCollectionRef);

    const panelyProducts: PanelProduct[] = querySnapshot.docs.map((doc) => ({
      ...(doc.data() as PanelProduct),
      id: doc.id,
    }));

    const final_data = panelyProducts.sort((a, b) => {
      return Number(a.slug) - Number(b.slug);
    });
    return final_data;
  } catch (error) {
    console.error("Error fetching photos:", error);
    return [];
  }
}

export async function AdminaDeleteMoodPhoto(
  docId: string,
  delete_photo: string
) {
  const db = getFirestoreAdmin();

  try {
    const docRef = db.collection("stavby_popisy").doc(docId);
    const docSnapshot = await docRef.get();

    if (!docSnapshot.exists) {
      throw new Error("Document not found.");
    }

    let moodove_photo = docSnapshot.data()?.fotky || [];

    moodove_photo = moodove_photo.filter(
      (item: string) => item !== delete_photo
    );

    await docRef.update({
      fotky: moodove_photo,
    });

    return "success";
  } catch (error) {
    console.error("Database Error: Failed", error);
    return "false";
  }
}
