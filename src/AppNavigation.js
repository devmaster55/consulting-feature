import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { BsClipboardData } from 'react-icons/bs';
import { IoIosCreate, IoMdConstruct } from 'react-icons/io';
import { SiCampaignmonitor} from 'react-icons/si';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import DashboardPage from './pages/DashboardPage'
import CampaignsPage from './pages/CampaignsPage'
import SegmentsPage from './pages/SegmentsPage'
import AutomationsPage from './pages/AutomationsPage'

const AppNavigation = () => {
  const routes = [
    {
      path: '/dashboard',
      main: () => <DashboardPage />
    },
    {
      path: '/campaigns',
      main: () => <CampaignsPage />
    },
    {
      path: '/segments',
      main: () => <SegmentsPage />
    },
    {
      path: '/automations',
      main: () => <AutomationsPage />
    },
  ];

    return (
      <Router>
        <Container fluid>
          <Row>
            <Col xs={2} id='sidebar-wrapper'>
              <div className='sidebar'>
                <ul>
                  <li>
                    <Link to='/dashboard'>
                      <BsClipboardData className='sidebar-icon'/>{'Dashboard'}
                    </Link>
                  </li>
                  <li>
                    <Link to='/campaigns'>
                    <IoIosCreate className='sidebar-icon'/>{'Campaigns'}
                    </Link>
                  </li>
                  <li>
                    <Link to='/segments'>
                      <SiCampaignmonitor className='sidebar-icon'/>{'Segments'}
                    </Link>
                  </li>
                  <li>
                    <Link to='/automations'>
                      <IoMdConstruct className='sidebar-icon'/>{'Automations'}
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>

            <Col xs={10}>
              <div className='content'>
                <Switch>
                  {routes.map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      children={<route.main />}
                    />
                  ))}
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    )
}

export default AppNavigation;