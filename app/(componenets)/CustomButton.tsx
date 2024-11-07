"use client"
import React from 'react'
import { CustomButtonProps } from "../../types/index";
const CustomButton = ({title,containerStyles,isDisabled,handleClick,textStyles ,btnType,rightIcon}:CustomButtonProps) => {
  return (
    <button 
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    disabled={isDisabled}
    type={btnType || "button"}
    >
     <span className={`flex-1${textStyles}`}>{title}</span>
      
    </button>
  )
}

export default CustomButton
