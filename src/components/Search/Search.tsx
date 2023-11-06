import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import styles from "./search.module.css";
import { SearchProps, AutocompleteArrayItem } from "./Search.props";

const Search: React.FC<SearchProps> = ({ searchAutocomplete }) => {
  const [inputValue, setInputValue] = useState("")
  const [showItem, setShowItem] = useState(false)
  const [highRank, setHighRank] = useState<AutocompleteArrayItem[]>([])
  const searchRef = useRef(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    const value = e.target.value
    setInputValue(value)

    const filteredItems = searchAutocomplete.filter((item) => item.text.toLowerCase().includes(value.toLowerCase())).sort((st, nd) => st.rating - nd.rating).slice(0, 3)
    setHighRank(filteredItems)
    setShowItem(true)
  }

  const handleItemText = (item: AutocompleteArrayItem) => {
    setInputValue(item.text)
    setShowItem(false)
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const wrapper = document.getElementById("wrapper") as HTMLElement
      if (wrapper && !wrapper.contains(e.target as Node)) {
        setShowItem(false)
      }
    }
      document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])
  

  return (
    <div ref={searchRef} id="wrapper" className={styles.wrapper}>
      <input
        className={styles.inp}
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleInputChange}
      />
      {showItem && (
        <div className={styles.dropdown}>
          {
            highRank.map((item: AutocompleteArrayItem) => (
              <div
                onClick={() => handleItemText(item)}
                key={item.text}
                className={styles.item}
              >
                {item.text}
              </div>
            ))
          }
        </div>
      )}
      <button className={styles.btn}>Search</button>
    </div>
  )
}

export default Search
