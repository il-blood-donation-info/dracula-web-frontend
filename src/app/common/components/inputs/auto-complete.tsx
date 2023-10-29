'use client'

import Image from 'next/image'
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import search from '../../../images/search.svg'
import { isEmpty } from 'lodash'

export const AutoComplete = ({ options, onSelectOption, placeholder }: Props) => {
  const searchContainer = useRef<HTMLDivElement>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [inputWidth, setInputWidth] = useState(0);
  const [isVisible, setVisibility] = useState(false);
  const [curser, setCurser] = useState(-1);

  useLayoutEffect(() => {
    if(searchContainer.current !== null) {
      setInputWidth(searchContainer.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("mousedown", handleClickOutside)
    }
  })

  const handleClickOutside = (event: any) => {    
    if (
        searchContainer.current && 
        !searchContainer.current.contains(event.target)
       ) {
        hideSuggestion()
       }
  }

  const suggestions = useMemo(() => {
      if(!searchTerm) return options
      return options.filter((option) => 
        option.toLowerCase().includes(searchTerm.toLowerCase()) && 
        option.toLowerCase() !== searchTerm.toLowerCase()
      )
  }, [searchTerm, options])

  const showSuggestion = () => setVisibility(true)
  const hideSuggestion = () => setVisibility(false)

  const handleSelectOption = (option: string) => {
    setSearchTerm(option)
    onSelectOption(option)
  }
  const showOptions = !isEmpty(suggestions) && searchTerm.length >= 2 && isVisible
  
  const keyboardNavigation = (e: React.KeyboardEvent) => {
    if(e.key === "ArrowDown"){
      isVisible 
          ? setCurser(c => (c < suggestions.length -1 ? c + 1 : c)) 
          : showSuggestion()
    }
    if(e.key === "ArrowUp"){
      setCurser(c => (c > 0 ? c - 1 : 0)) 
    } 
    if(e.key === "Escape"){
      hideSuggestion()
    } 
    if(e.key === "Enter" && curser > -1){
      handleSelectOption(suggestions[curser])
    }
  }

  return (
    <div className="mb-6">
      <div ref={searchContainer} className="flex w-full rounded-lg pr-2 shadow-md">
        <Image src={search} alt="search icon"/>
        <input 
          type="search" 
          name="autocomplete" 
          value={searchTerm}
          onChange={(e) => {
            handleSelectOption(e.target.value)
          }}
          onClick={showSuggestion}
          onKeyDown={keyboardNavigation}
          placeholder={placeholder}
          className="w-full rounded-lg p-2" />
      </div>
      {isVisible && <ul style={{
        width: `${inputWidth}px`
      }} 
      className={`absolute shadow-md max-h-40 overflow-y-auto border rounded-lg bg-white transition-opacity duration-300 easy ${showOptions ? 'opacity-100' : 'opacity-0'}`}>
        {suggestions.map((option, index) => {
          return <li 
            className={`p-2 ${curser === index ? 'bg-slate-100' : ''}`}
            key={option} 
            onClick={() => {
              handleSelectOption(option)
              hideSuggestion()
            }} 
            role="button"
          >{option}</li>
        })}
      </ul>}
    </div>

  )
}

type Props = {
  options: Array<string>
  onSelectOption: (option: string) => void
  placeholder: string
}