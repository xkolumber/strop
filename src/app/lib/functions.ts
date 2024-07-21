import { cookies } from "next/headers";

export const getToken = async () => {
  const cookieStore = cookies();
  const authTokenCookie = cookieStore.get("FirebaseIdTokenStrop");
  return authTokenCookie?.value;
};
