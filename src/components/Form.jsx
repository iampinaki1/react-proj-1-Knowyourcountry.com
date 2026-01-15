import React from "react";
import { useFormAction } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { animeReviewSchema } from "../validator/animeReview.schema";

function Form() {
  const [rating, setRating] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const handleFormSubmit = (formData) => {

    const formInputData = Object.fromEntries(formData.entries());
        formInputData.rating = Number(formInputData.rating);

    console.log(formInputData);
    const result = animeReviewSchema.safeParse(formInputData);
    console.log(result.error);
    if (!result.success) {
      setSubmitted(false);
      const fieldErrors = {};
      result.error.issues.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      console.log("hello", fieldErrors);
      return;
    }
    (async () => {
      try {
        await axios.post("http://localhost:3000/api/Rating", result.data);
        console.log(result.data);
        setSubmitted(true);
      } catch (err) {
        console.error(err);
      }
    })();
  };

  return (
    <div
      className="flex
        justify-center items-center h-full pb-12"
    >
      <form action={handleFormSubmit}>
        <div className=" backdrop-blur-md rounded-2xl p-2 grid grid-cols-1 border-2 border-white">
          <div className="backdrop-blur-md p-4 flex justify-between items-center">
            <label htmlFor="name">Name Of Anime</label>
            <input
              className="bg-white/20 rounded-sm p-2"
              type="text"
              name="animename"
              id="name"
              autoComplete="off"
            />{" "}
            {errors.animename && <p>{errors.animename}</p>}
          </div>
          <div className="backdrop-blur-md flex justify-between items-center gap-2 p-4">
            <label htmlFor="email">Email Id</label>
            <input
              autoComplete="off"
              type="text"
              className="bg-white/20 p-2 rounded-sm"
              name="email"
              id="email"
            />{" "}
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="backdrop-blur-md items-center flex justify-between p-4">
            <label htmlFor="rating">Rate It </label>
            <span className="p-1.5 text-font-bold bg-black/50 rounded-full">
              <i class="ri-bard-fill"></i>
              {rating}
            </span>
            <input
              autoComplete="off"
              type="range"
              name="rating"
              value={rating}
              onChange={(e) => {
                setRating(Number(e.target.value)); //silent bug...wow bro u r preo...
              }}
              min="1"
              max="5"
              id="Rating"
            />
          </div>{" "}
          <div> {errors.rating && <p>{errors.rating}</p>}</div>
          <div className="backdrop-blur-md items-center flex justify-between gap-4 p-4">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="bg-white text-black p-2 rounded resize-none w-64"
              placeholder="Write your message..."
              autoComplete="off"
            ></textarea>
          </div>
          <div className="flex justify-center ">
            <span className=" backdrop-blur-3xl border border-double bg-white/40 p-1 rounded-2xl">
              <button
                type="submit"
                // onClick={() => {
                //   setSubmitted(true);
                // }}
                className="cursor-pointer"
              >
                Submit Rating
              </button>
            </span>
          </div>
        </div>
        <div
          className={submitted ? "flex justify-center items-center" : "hidden"}
        >
          <span className="text-green-300 rounded-2xl p-2 mt-2">submitted</span>
        </div>
      </form>
    </div>
  );
}

export default Form;
// Rating
// :
// "3"
// animename
// :
// "qer"
// email
// :
// "rewrw"
// message
// :
// "werewr"
