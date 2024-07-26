"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const sendMail = async (data) => {
    if (!isLoading) {
      setIsLoading(true);
      try {
        const response = await axios.post("/api/send", data);
        setIsLoading(false);
        if (response.status === 200) {
          setTimeout(() => {
            setIsLoading(false);
            setIsSent(true);
            reset();
            setTimeout(() => {
              setIsSent(false);
            }, 4000);
          }, 100);
        } else {
          console.error("error");
        }
      } catch (error) {
        console.error("error:", error);
      }
    }
  };
  return (
    <div className='w-4/5 md:max-w-[500px] mx-auto space-y-8 mt-28'>
      {isLoading ? (
        <span className='loading loading-spinner loading-md fixed top-2 right-2'></span>
      ) : null}
      {isSent ? (
        <div className='md:flex toast toast-top toast-center'>
          <div className='flex mx-auto alert slide-enter-active'>
            <span className='font-mono text-lg font-light'>
              🚀 Message sent !
            </span>
          </div>
        </div>
      ) : null}
      <div id='title'>
        <h1 className='text-2xl md:text-3xl font-mono flex items-center mb-4'>
          <span className='ml-2'>👋 Send me a message</span>
        </h1>
        <hr />
      </div>
      <form
        className='space-y-4 flex flex-col'
        action='#'
        onSubmit={handleSubmit(sendMail)}
      >
        <div className='flex justify-between'>
        <input
        className='input p-3 rounded  border border-2 border-gray-100 mr-2 w-full'
        type='text'
        id='name'
        placeholder='Last Name '
        {...register("name", { required: false })}
        />

        <input
        className='input p-3 rounded  border border-2 border-gray-100 mr-2 w-full'
        type='text'
        id='firstname'
        placeholder='First name'
        {...register("firstname", { required: false })}
        />

        </div>
        <div>
          <label htmlFor='email' className='block mb-1 text-sm font-extralight'>
            <span className='text-error font-normal text-red-500'>*</span> Mail address
          </label>
          <input
            className='input p-3 rounded  border border-2 border-gray-100 mr-2 w-full'
            type='email'
            id='email'
            placeholder='hello_world@spaceX.com'
            {...register("email", { required: true })}
          />
        </div>
        <div className='sm:col-span-2'>
          <label
            htmlFor='message'
            className='block mb-1 text-sm font-extralight'
          >
            <span className='text-error font-normal text-red-500'>*</span> Message
          </label>
          <textarea
            className='input p-3 rounded  border border-2 border-gray-100 mr-2 w-full'
            id='message'
            rows='4'
            placeholder='Thank you for this form with Next13 & Sengrid !'
            {...register("message", { required: true })}
          ></textarea>
          <p className='text-center text-sm font-extralight '>
            Fields marked with <span className='text-error text-red-500 font-normal'>*</span>{" "}
            are required
          </p>
        </div>
        <div className='flex justify-between py-4 md:py-8 '>
          <button type='reset' className='p-2 bg-gray-500 text-white  text-xl md:text-2xl rounded-lg shadow-lg'>
            Cancel
          </button>
          <button type='submit' className='p-2 bg-red-500 text-white  text-xl md:text-2xl rounded-lg shadow-lg'>
            Send message
          </button>
        </div>
        <div className="py-6"></div>
      </form>
    </div>
  );
}