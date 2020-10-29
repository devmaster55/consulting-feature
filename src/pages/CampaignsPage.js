import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';

import PageTitle from '../components/PageTitle'
import CampaignTable from '../components/table/CampaignTable'
import CreateCampaign from '../components/modals/CreateCampaign'

import { campaigns } from '../data/campaigns.json'

const CampaignsPage = () => {
  const [shownCreateCampaign, setShowCreateCampaign] = useState(false)
  const [previewCampaigns, setPreviewCampaigns] = useState([])
  const [sentCampaigns, setSentCampaigns] = useState([])
  
  useEffect(() => {
    let temp = campaigns.filter(element => element.status == "Preview")
    setPreviewCampaigns(temp)
    
    temp = campaigns.filter(element => element.status == "Sent")
    setSentCampaigns(temp)
  }, [])

  const handleOnClickCreateCampaign = () => {
    setShowCreateCampaign(true)
  }

  const handleClose = () => {
    setShowCreateCampaign(false)
  }

  return (
    <div className="page-container">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
        <PageTitle title={'Campaigns'} />
        <Button 
          variant="primary"
          onClick={handleOnClickCreateCampaign}>
          {'Create Campaign'}
        </Button>
      </div>
      
      <div className="page-content">
        <div>
          {'Open Campaigns'}
        </div>
        <CampaignTable campaigns={previewCampaigns}/>
        <div className="seperator"/>
        <div>
          {'Sent Campaigns'}
        </div>
        <CampaignTable campaigns={sentCampaigns}/>
      </div>

      <CreateCampaign shown={shownCreateCampaign} close={handleClose}/>
    </div>
  )
}

export default CampaignsPage;