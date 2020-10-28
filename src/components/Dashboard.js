import React, {useState, useEffect} from 'react';
import CampaignTable from './table/campaignTable';
import SegmentsTable from './table/segmentsTable';
import Modal from './modals/createCamapaign';
import axios  from 'axios';
import {BsClipboardData} from 'react-icons/bs'
import {IoIosCreate, IoMdConstruct} from 'react-icons/io';
import {SiCampaignmonitor} from 'react-icons/si'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Dashboard = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [sent, setSent] = useState([]);
    const [segments, setSegments] = useState([]);
    const [preview, setPreview] = useState([]);

    useEffect(() => {
        
        axios.get('http://localhost:8080/data')
        .then((data) => {
            setCampaigns(data);
            setSent(data.data.sent);
            setPreview(data.data.preview);
            setSegments(data.data.segments);
        })
        .catch((err) => {
            console.log(err);
        })

        console.log(sent, preview, segments)
    }, []);

    const showTables = (value) => {
        console.log(value)
    }

    const routes = [
        {
          path: "/segments",
          exact: true,
          main: () => <SegmentsTable data={segments} title={"Segments"}/>
        },
        {
          path: "/sent",
          main: () => <CampaignTable data={sent} title={"Sent"}/>
        },
        {
          path: "/preview",
          main: () => <CampaignTable data={preview} title={"Preview"}/>
        },
        {
            path: "/createCampaign",
            main: () => <Modal data={campaigns} setCampaigns={setCampaigns}/>
        }
      ];

    return (
        <Router>
        <Container fluid>
        <Row>
            <Col xs={2} id="sidebar-wrapper">
                <div className="sidebar">
            <ul>
              <li>
                <Link to="/segments"><BsClipboardData className="sidebar-icon"/>Campaign Segments</Link>
              </li>
              <li>
                <Link to="/sent"><SiCampaignmonitor className="sidebar-icon"/>Sent Campaigns</Link>
              </li>
              <li>
                <Link to="/preview"> <IoMdConstruct className="sidebar-icon"/>Preview Campaigns</Link>
              </li>
              <li>
                <Link to="/createCampaign"><IoIosCreate className="sidebar-icon"/>Create Campaign</Link>
              </li>
            </ul>
          </div>
            </Col>
            <Col xs={10} id="page-content-wrapper">
            <div className="content">
              <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                />
              ))}
            </Switch>
              <Switch>
                {routes.map((route, index) => (
                  // Render more <Route>s with the same paths as
                  // above, but different components this time.
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
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

export default Dashboard;