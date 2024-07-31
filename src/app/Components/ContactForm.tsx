"use client";

import { FieldValues, useForm } from "react-hook-form";

import Image from "next/image";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ButtonElement from "./ButtonElements/ButtonElement";
import { ClipLoader } from "react-spinners";

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

    console.log(data);

    try {
      const response = await fetch("/api/send-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          tel_number: data.tel_number,
          interest: data.interest,
          place: data.place,
          date: data.date,
          message: data.message,
        }),
      });

      if (response.ok) {
        reset();
        toast.success("Správa bola úspešne odoslaná");
        console.log("Email sent successfully!");
        setIsLoading(false);
      } else {
        console.error("Failed to send email");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Toaster />
      <div className="flex flex-col md:flex-row justify-center gap-12 main_section additional_padding">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="contact_form w-full md:w-1/2  flex flex-col"
        >
          {/* <StepBack /> */}
          <h1 className="text-fifthtiary mb-4">Kontaktujte nás</h1>

          <div className="flex flex-col md:flex-row gap-4">
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

          <div className="flex flex-col md:flex-row gap-4">
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

          <div className="flex flex-col md:flex-row gap-4">
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
            <ButtonElement
              text={`${isLoading ? "Zasielanie..." : "Odoslať"} `}
            />
          </button>
        </form>

        <Image
          src={"/kontakt.jpg"}
          alt="Photo blog"
          width={1000}
          height={1000}
          quality={100}
          className="w-full md:w-1/2 h-initial rounded-[8px] object-cover hidden md:flex"
        />
      </div>
    </>
  );
};

export default ContactForm;
