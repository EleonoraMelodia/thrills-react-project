import React, { ChangeEvent, useState } from "react";
import Reviews from "./Reviews";

type Review = {
  name: string;
  city: string;
  rew: string;
};

const FormLocal = () => {
  const [newReview, setNewReview] = useState<Review>({
    name: "",
    city: "",
    rew: "",
  });

  const [reviews, setReviews] = useState<Review[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewReview((prevReview) => ({ ...prevReview, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Aggiungi la nuova recensione alle recensioni esistenti
       setReviews((prevReviews) => [...prevReviews, newReview]);

    // Reset the state of the form after submission
    setNewReview({ name: "", city: "", rew: "" });
  };




  return (
    <div className="flex flex-col justify-">
      <Reviews reviews={reviews} />
      

      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label htmlFor="name">First name</label>
        <input className="rounded-xl bg-slate-200 p-2 " onChange={handleChange} type="text" name="name" value={newReview.name} />
        <label htmlFor="city">City</label>
        <input className=" rounded-xl bg-slate-200 p-2  " onChange={handleChange} type="text" name="city" value={newReview.city} />
        <label htmlFor="experience">Review</label>
        <textarea 
          onChange={handleChange}
          name="rew"
          className="rounded-xl bg-slate-200 p-2  "
          id="experience"
          cols={50}
          rows={5}
          value={newReview.rew}
        ></textarea>
       {/*  <button onClick={handleReviewAdding} type="submit">Invia recensione</button> */}
      </form>
    </div>
  );
};

export default FormLocal;
