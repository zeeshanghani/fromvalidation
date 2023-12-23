"use client";
import { useState } from "react";
import * as yup from "yup";
import DisplayContact from "./displayFrom";
import { contactTypes, onChangeEventType } from "../types/commontype";

export default function ContactForm() {
  const [contactInfo, setContactInfo] = useState<contactTypes>({
    name: "",
    FatherName:"",
    email: "",
    education:"",
    profession:"",
    phone: 0,
    message: "",
    adress:"",
  });

  const [errors, setError] = useState<string[]>([]);

  const contactInfoSchema = yup.object().shape({
    name: yup.string().required().min(5).max(10),
    email: yup.string().email().required(),
    message: yup.string().required(),
  });

  const [contactList, setContactList] = useState<contactTypes[]>([]);

  const onChangeHandler = (e: onChangeEventType) => {
    let userDetails = {
      ...contactInfo,
      [e.target.name]: e.target.value,
    };
    setContactInfo(userDetails);
  };

  const onClickHandler = async () => {
    try {
      const result = await contactInfoSchema.validate(contactInfo);
      console.log(result);

      if (!result) {
        return;
      }

      let newContactList: contactTypes[] = [...contactList, contactInfo];
      setContactList(newContactList);

      setError([]);
      setContactInfo({
        name: "",
        FatherName:"",
        email: "",
        education:"",
        profession:"",
        phone: 0,
        message: "",
        adress:"",
      });
    } catch (err) {
      setError(err.errors);

      // console.log("error", err.errors);
    }
  };
  return (
    <>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Name
        </label>
        <input
          value={contactInfo.name}
          onChange={onChangeHandler}
          type="text"
          id="name"
          name="name"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="FatherName"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
         FatherName
        </label>
        <input
          value={contactInfo.FatherName}
          onChange={onChangeHandler}
          type="text"
          id="FatherName"
          name="FatherName"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Email
        </label>
        <input
          value={contactInfo.email}
          onChange={onChangeHandler}
          type="email"
          id="email"
          name="email"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="education"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Education
        </label>
        <input
          value={contactInfo.education}
          onChange={onChangeHandler}
          type="text"
          id="education"
          name="education"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>


      <div className="mb-4">
        <label
          htmlFor="profession"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Profession
        </label>
        <input
          value={contactInfo.profession}
          onChange={onChangeHandler}
          type="text"
          id="profession"
          name="profession"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>


      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Adress
        </label>
        <input
          value={contactInfo.adress}
          onChange={onChangeHandler}
          type="text"
          id="adress"
          name="adress"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="phone"
          className="block text-gray-700 text-sm font-bold mb-22"
        >
          Phone
        </label>
        <input
          value={contactInfo.phone}
          onChange={onChangeHandler}
          type="number"
          id="phone"
          name="phone"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Message
        </label>
        <textarea
          value={contactInfo.message}
          onChange={onChangeHandler}
          id="message"
          name="message"
          rows={4}
          className="w-full px-3 py-2 border rounded-md"
          required
        ></textarea>
      </div>
      {errors.map((item) => {
        return (
          <div style={{ color: "red" }}>
            <h1>{item}</h1>
          </div>
        );
      })}
      <div className="mb-6">
        <button
          onClick={onClickHandler}
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
      <DisplayContact contactData={contactList} />
    </>
  );
}
