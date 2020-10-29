import React from "react";

import PageTitle from '../components/PageTitle'

const DashboardPage = () => {
  return (
    <div className="page-container">
      <PageTitle title={'Dashboard'} />
      <div className="page-content">
        {'Welcome To Dashboard'}
      </div>
    </div>
  )
}

export default DashboardPage;