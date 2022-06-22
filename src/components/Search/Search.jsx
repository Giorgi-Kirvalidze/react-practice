import styles from "./Search.module.css";

export const Search = ({ handleInputChange }) => (
  <div className='search'>
      <input
        autoFocus
        className='input'
        type='text'
        placeholder='search user'
        onChange={handleInputChange}
      />
  </div>
)