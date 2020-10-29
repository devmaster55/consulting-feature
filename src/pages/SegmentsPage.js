import React, { useState } from "react";

import PageTitle from '../components/PageTitle'
import SegmentsTable from '../components/table/SegmentsTable'

import { segments } from '../data/segments.json'

const SegmentsPage = () => {
  return (
    <div className="page-container">
    <PageTitle title={'Segments'} />
    <div className="page-content">
      <SegmentsTable segments={segments}/>
    </div>
  </div>
  )
}

export default SegmentsPage;