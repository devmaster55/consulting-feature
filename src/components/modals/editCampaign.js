import React, { useEffect } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {AiOutlineClose} from 'react-icons/ai'


const EditCampaignModal = (props) => {
    const initialFormData = Object.freeze({
        ...props.data
      });
      
    const [formData, updateFormData] = React.useState(initialFormData);
  
    const handleChange = (e) => {
      updateFormData({
        ...formData,
  
        // Trimming any whitespace
        [e.target.name]: e.target.value.trim()
      });
    };
  
    const handleSubmit = (e) => {
      if (formData.clicked === '' && formData.sent === '') {
          formData.stats = null;
      }
      axios.post('http://localhost:8080/editCampaign', {
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

    if (!props.hide) {
        return (
            <div className="form-wrapper">
                <AiOutlineClose onClick={props.toggle} size={24} className="form-close-btn"/>
                <h2>Edit Campaign</h2>
                <form classname="form">
                    <input name="id" type="text" placeholder={props.data.id} value={props.data.id} onChange={handleChange} />
                    <br/>
                    <input 
                    placeholder="Campaign Name"
                    name="name"
                    type="text"
                    onChange={handleChange} />
                    <br />
                    <textarea placeholder={props.data.text} name="text" type="text"  onChange={handleChange} />  
                    <br />
                    <label>Sent</label>
                    <input name="status" type="radio"  value="Sent" onChange={handleChange} />
                    <label>Preview</label>
                    <input name="status" type="radio"  value="Preview" onChange={handleChange} />
                    <br />
                    <input placeholder={props.data.segment_id} name="segment_id" type="number"  onChange={handleChange} />
                    <br />
                    <input placeholder={props.data.media} name="media" type="text"  onChange={handleChange} />
                    <br />
                    <label>Stats</label>
                    <br />
                    <input placeholder={props.data.stats !== null ? props.data.stats.sent : "Null"} name="sent" type="number" onChange={handleChange} />
                    <br />
                    <input placeholder={props.data.stats !== null ? props.data.stats.clicked : "Null"} name="clicked" type="number" onChange={handleChange} />
                    <br />
                    <button onClick={handleSubmit} className="form-button">Submit</button>
                </form>
            </div>
        )
    } else {
        return null;
    }
  };

export default EditCampaignModal;