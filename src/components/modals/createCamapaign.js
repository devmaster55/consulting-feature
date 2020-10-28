import React, { useEffect } from 'react';
import axios from 'axios';


const Modal = ({data, setCampaigns}) => {
    const initialFormData = Object.freeze({
        name: "",
        text: "",
        status: "",
        media: "",
        stats: null,
        sent: '',
        clicked: ''
      });
      
    const [formData, updateFormData] = React.useState(initialFormData);
  
    const handleChange = (e) => {
      updateFormData({
        ...formData,
  
        // Trimming any whitespace
        [e.target.name]: e.target.value.trim()
      });
    };

    const forceUpdate = React.useReducer(bool => !bool)[1];
  
    const handleSubmit = (e) => {
      if (formData.clicked === '' && formData.sent === '') {
          formData.stats = null;
      }
      console.log(formData)
      axios.post('http://localhost:8080/createCampaign', {
          data: formData
      })
      .then((data) => {
          console.log(data)
          window.refresh()
      })
      .catch((err) => {
          console.log(err)
      })

    };

    return (
        <div className="form-wrapper">
            <h2>Create A Campaign</h2>
            <form classname="form">
                <input 
                placeholder="Campaign Name"
                name="name"
                type="text"
                onChange={handleChange} />
                <br />
                <textarea placeholder="Campaign Text" name="text" type="text"  onChange={handleChange} />  
                <br />
                <input name="status" type="radio"  value="Sent" onChange={handleChange} className="radio-option"/>     
                <label className="radio-label">Sent</label>          
                <br/>
                <input name="status" type="radio"  value="Preview" onChange={handleChange} className="radio-option"/>          
                <label className="radio-label">Preview</label>      
                <br />
                <input placeholder="Segment Id (Number)" name="segment_id" type="number"  onChange={handleChange} />
                <br />
                <input placeholder="Campaign Media" name="media" type="text"  onChange={handleChange} />
                <br />
                <label>Stats</label>
                <br />
                <input placeholder="Sent (Number)" name="sent" type="number" onChange={handleChange} />
                <br />
                <input placeholder="Clicked (Number" name="clicked" type="number" onChange={handleChange} />
                <br />
                <button onClick={handleSubmit}
                className="form-button">Submit</button>
            </form>
        </div>
    )
  };

export default Modal;