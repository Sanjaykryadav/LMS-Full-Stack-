import React from "react";
import "./FirstTimePref.css";
import { backend_server } from "../../main";
import { useNavigate } from 'react-router-dom'; 


const FirstTimePref = () => {
  const API_ALLBOOKS_URL = `${backend_server}/api/v1/books`;
  const [pref, setPref] = React.useState([]);
  const [selectedPreferences, setSelectedPreferences] = React.useState([]);
  const navigate = useNavigate(); 

  React.useEffect(() => {
    async function getData() {
      const response = await fetch(API_ALLBOOKS_URL);
      const data = await response.json();
      const uniqueCategories = [
        ...new Set(data.data.map((book) => book.category)),
      ];
      setPref(uniqueCategories);
    }
    getData();
  }, []);

  const handleCheckboxChange = (category) => {
    const updatedPreferences = [...selectedPreferences];
    if (updatedPreferences.includes(category)) {
      setSelectedPreferences(updatedPreferences.filter((item) => item !== category));
    } else {
      setSelectedPreferences([...updatedPreferences, category]);
    }
  };

  const submitPref = () => {
    localStorage.setItem('flag','false')
    localStorage.setItem('preference',JSON.stringify(selectedPreferences));
    navigate('/');
  };

  return (
    <div className="form-container">
      <div className="content">
        <h2>Select Your Preferences</h2>
        <p>Please choose the categories you are interested in.</p>

        <form className="preferences-form">
          {pref.length > 0 ? (
            pref.map((category, index) => (
              <label className="checkbox-form-container" key={index}>
                <input
                  type="checkbox"
                  name="preference"
                  value={category}
                  checked={selectedPreferences.includes(category)}
                  onChange={() => handleCheckboxChange(category)}
                />
                <span className="checkmark"></span>
                {category}
              </label>
            ))
          ) : (
            <p>Loading preferences...</p>
          )}

        </form>
          <div className="form-footer">
            <button onClick={submitPref} className="btn">
              Save Preferences
            </button>
          </div>
      </div>
    </div>
  );
};

export default FirstTimePref;
