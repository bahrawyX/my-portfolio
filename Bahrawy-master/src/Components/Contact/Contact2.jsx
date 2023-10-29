// import React, { useRef, useEffect } from "react";
// import { useForm } from "@formspree/react";
// import styles from "./Contact.module.css";
// const Contact = (props) => {
//   const [state, handleSubmit] = useForm("mqkvgool");
//   const form = useRef();

//   useEffect(() => {
//     if (state.succeeded) {
//       resetForm(); // Clear form fields on successful submission
//     }
//   }, [state.succeeded]);

//   const resetForm = () => {
//     form.current.reset(); // Reset form fields
//   };

//   return (
//     <div className={`${styles.contact}`}>

//       <h1 className="text-[6rem] font-black">Contact Us</h1>
//       <form
//         ref={form}
//         onSubmit={handleSubmit}
//         className="contact-cont flex flex-col w-[47%]"
//       >
//         <input
//           id="name"
//           type="name"
//           required
//           name="name"
//           className="contact-name my-[1em] border-b pb-[0.3em] bg-transparent"
//           placeholder="Your name"
//         />
//         <input
//           id="email"
//           type="email"
//           name="email"
//           required
//           className="contact-name my-[1em] border-b pb-[0.3em] bg-transparent"
//           placeholder="Your email"
//         />
//         <textarea
//           style={{ resize: "none" }} // Add this style to disable resizing
//           id="message"
//           type="message"
//           name="message"
//           className="contact-message bg-transparent my-[1em] border-b pb-[0.3em] bg-transparent"
//           placeholder="Tell us your message"
//           cols="30"
//           required
//           rows="10"
//         ></textarea>

//         <button
//           type="submit"
//           className="py-[1em] w-fit px-[3em] text-black bg-white font-bold my-[1.5em]"
//           disabled={state.submitting}
//         >
//           {state.submitting ? "Sending..." : "Send"}
//         </button>

//         {state.errors ? (
//           <p className="text-red-500 text-[1.2rem]">
//             {state.errors.getFormErrors().length
//               ? state.errors.getFormErrors()[0].message
//               : state.errors.getAllFieldErrors().length
//               ? state.errors.getAllFieldErrors()[0][1][0].message
//               : ""}
//           </p>
//         ) : state.succeeded ? (
//           <p className="text-green-500 text-[1rem]">
//             Form is sended sucessfully!
//           </p>
//         ) : (
//           ""
//         )}
//       </form>
//     </div>
//   );
// };

// export default Contact;