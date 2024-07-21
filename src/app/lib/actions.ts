"use server";

import { revalidatePath } from "next/cache";

export async function doRevalidate(pathname: string) {
  revalidatePath(pathname);
}
