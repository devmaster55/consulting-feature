import React from 'react';
import Modal from 'react-bootstrap/Modal';

const CreateCampaign = ({shown, close}) => {
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

  const handleSubmit = (e) => {
    if (formData.clicked === '' && formData.sent === '') {
        formData.stats = null;
    }
  };

  return (
    <Modal show={shown} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>
          Create A Campaign
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form className="form">
          <input
            placeholder="Campaign name"
            name="name"
            type="text"
            onChange={handleChange} />
          <br/>
          
          <textarea placeholder="Campaign Text" name="text" type="text"  onChange={handleChange} />  
          <br/>
          
          <input placeholder="Segment Id (Number)" name="segment_id" type="number"  onChange={handleChange} />
          <br/>
          
          <input placeholder="Campaign Media" name="media" type="text"  onChange={handleChange} />
          <br/>
          
          <label>Stats</label>
          <br/>
          
          <input placeholder="Sent (Number)" name="sent" type="number" onChange={handleChange} />
          <br/>
          
          <input placeholder="Clicked (Number" name="clicked" type="number" onChange={handleChange} />
          <br/>
          
          <button onClick={handleSubmit}
          className="form-button">Submit</button>
        </form>
      </Modal.Body>
    </Modal>
  )
};

export default CreateCampaign;