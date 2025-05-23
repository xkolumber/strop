"use client";

import { FieldValues, useForm } from "react-hook-form";

import Image from "next/image";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { sendEmailContactForm } from "../lib/actions";
import ButtonElement from "./ButtonElements/ButtonElement";
import BackgroundVideo from "./BackgroundVideo";
import VideoContact from "./VideoContact";
import { blur_url } from "../lib/functionsClient";

interface FormData {
  name: string;
  email: string;
  message: string;
  tel_number: string;
  interest: string;
  place: string;
  date: string;
}

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);

    try {
      const response = await sendEmailContactForm(data);

      if (response.data?.id) {
        reset();
        toast.success("Správa bola úspešne odoslaná");
        console.log("Email sent successfully!");
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error sending email:", error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Toaster />
      <div className="flex flex-col lg:flex-row justify-center gap-12 main_section additional_padding">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="contact_form w-full lg:w-1/2  flex flex-col"
        >
          {/* <StepBack /> */}
          <h1 className="text-fifthtiary mb-4">Kontaktujte nás</h1>

          <div className="flex flex-col md:flex-row md:gap-4">
            <input
              type="text"
              id="meno"
              {...register("name")}
              required
              placeholder="Meno a priezvisko*"
              className="w-full "
            />

            <input
              type="email"
              id="email"
              {...register("email")}
              placeholder="*Email"
              required
              className="w-full"
            />
          </div>

          <div className="flex flex-col md:flex-row md:gap-4">
            <input
              type="text"
              id="tel_number"
              {...register("tel_number")}
              required
              placeholder="Telefónne číslo*"
              className="w-full "
            />

            <input
              type="text"
              id="interest"
              {...register("interest")}
              placeholder="*Mám záujem o*"
              required
              className="w-full"
            />
          </div>

          <div className="flex flex-col md:flex-row md:gap-4">
            <input
              type="text"
              id="place"
              {...register("place")}
              required
              placeholder="Miesto stavby*"
              className="w-full "
            />

            <input
              type="text"
              id="date"
              {...register("date")}
              placeholder="Požadovaný termín dodania*"
              required
              className="w-full"
            />
          </div>

          <div className="message-form">
            <textarea
              id="message"
              rows={5}
              {...register("message")}
              placeholder="Správa"
              className="w-full "
              required
            />
          </div>

          <button className="mt-8 mb-8" type="submit" disabled={isLoading}>
            <ButtonElement text="Odoslať" isLoading={isLoading} />
          </button>
        </form>

        <Image
          src={
            "https://firebasestorage.googleapis.com/v0/b/strop-8bbc9.appspot.com/o/foto_web%2Fcontact_photo.png?alt=media&token=48202c42-ac40-4d50-9820-6a7c924d823f"
          }
          alt="Photo blog"
          width={500}
          height={500}
          quality={100}
          priority={true}
          className="w-full lg:w-1/2  h-initial rounded-[8px] object-cover hidden md:flex "
          placeholder="blur"
          blurDataURL={blur_url}
        />

        {/* <VideoContact /> */}
      </div>
    </>
  );
};

export default ContactForm;
