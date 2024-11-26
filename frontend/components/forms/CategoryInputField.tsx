import React, { useState } from 'react';

import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

interface Props {
  activeInputField: boolean
}

const CategoryInputField = ({ activeInputField }: Props) => {

  const [emoji, setEmoji] = useState("😃");
  const [isChooseEmoji, setIsChooseEmoji] = useState(false);
  const [categoryText, setCategoryText] = useState("");

  const handleEmojiSelect = (emoji: any) => {
    setEmoji(emoji.native);
  };

  const handleInputChange = (e: any) => {
    e.preventDefault();

    setCategoryText(e.target.value);
  }

  const handleSave = () => {
    console.log(categoryText);
  }

  return (
    <>
      <div className={`${activeInputField ? "block" : "hidden"}`}>

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

        <div className={`${isChooseEmoji ? "block" : "hidden"} absolute`}>
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