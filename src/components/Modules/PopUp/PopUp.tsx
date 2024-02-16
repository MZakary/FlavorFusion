import React, { useEffect, useState } from 'react';

function PopUp({ Title, Description, IconName, SubmitButton, CloseButton }) {
  const [isOpen, setIsOpen] = useState(true);

  // Function to handle closing the popup and storing its state in local storage
  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("popupState", "false");
  };

  const onSubmit = () => {
    // Do the rest of your logic here
  };

  useEffect(() => {
    const storedValue = localStorage.getItem("popupState");
    if (storedValue === "false") {
      setIsOpen(false);
    }
  }, []);

  return (
    <>
      {isOpen && (
        <section className='PopUp'>
          <div className="custom-alert">
            <div className="alert-content">
              <div className='TextDescription'>
                <h2 className='Title'>{Title} <span>Denis</span>?</h2>
                <h3>{Description}</h3>
              </div>
              <div className='inputs'>
                <i className="material-icons phone">{IconName}</i>
                <div className='VerticalLine'></div>
                <input type="text" placeholder='(123) 456-7890' />
              </div>
              <button className="SubmitButton" onClick={onSubmit}>{SubmitButton}</button>
              <button className='CloseButton' onClick={handleClose}>{CloseButton}</button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default PopUp;