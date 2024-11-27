import React, { useState, useRef, useEffect } from 'react';

import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { useClickOutside } from "primereact/hooks";

interface Props {
  toggleInputField: boolean
  setToggleInputField: any;
}

const CategoryInputField = ({ toggleInputField, setToggleInputField }: Props) => {

  const inputFieldRef = useRef(null);
  const emojiOverlayRef = useRef(null);

  const [emoji, setEmoji] = useState("😃");
  const [isChooseEmoji, setIsChooseEmoji] = useState(false);
  const [categoryText, setCategoryText] = useState("");

  useClickOutside(inputFieldRef, () => {
    setToggleInputField(false);
  })

  useClickOutside(emojiOverlayRef, () => {
    setIsChooseEmoji(false);
  })

  const handleEmojiSelect = (emoji: any) => {
    setEmoji(emoji.native);
    setIsChooseEmoji(false);
  };

  const handleInputChange = (e: any) => {
    e.preventDefault();

    setCategoryText(e.target.value);
  }

  const handleSave = () => {
    setEmoji("😃");
    setCategoryText("");
    setToggleInputField(!toggleInputField);

    console.log(emoji);
    console.log(categoryText);
  }

  return (
    <>
      <div className={`${toggleInputField ? "block" : "hidden"}`} ref={inputFieldRef}>

        <div className='flex items-center justify-center'>
          <input
            type="text"
            value={emoji}
            readOnly
            className='bg-input-field-background emoji-input-field rounded focus:outline-none w-[28px] h-[28px] flex items-center text-center cursor-pointer'
            onClick={() => setIsChooseEmoji(!isChooseEmoji)}
          />
          <input
            type="text"
            className='bg-input-field-background w-full text-slate-700 rounded focus:outline-none mx-1 p-1 text-sm'
            onChange={handleInputChange}
            value={categoryText}
          />

          <div
            className='w-[40px] h-[28px] bg-input-field-background rounded flex justify-center items-center'
            onClick={handleSave}
          >
            <i className='pi pi-check cursor-pointer text-slate-500'></i>
          </div>
        </div>

        <div ref={emojiOverlayRef} className={`${isChooseEmoji ? "block" : "hidden"} absolute`}>
          <Picker
            data={data}
            onEmojiSelect={handleEmojiSelect}
            theme="light"
            previewPosition="none"
            maxFrequentRows="0"
          />
        </div>

      </div >
    </>
  )
}

export default CategoryInputField;