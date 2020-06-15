import React from 'react';
import { Row, Col } from 'react-bootstrap';
import classNames from 'classnames';
import { SimulationTabs } from '../../constants';

const Header = ({ activeTab, setActiveTab }) => (
  <div
    className="position-sticky bg-white text-center"
    style={{ top: 0, zIndex: 1 }}
  >
    <Row className="m-0 border-primary border-bottom">
      <Col
        xs={4}
        className={classNames(
          'simulation-menu cursor-pointer border-primary border-right p-0',
          {
            active: activeTab === SimulationTabs.ACTION_TABLE,
          },
        )}
        onClick={() => setActiveTab(SimulationTabs.ACTION_TABLE)}
      >
        <h4 className="my-3 font-weight-normal">ACTION TABLE</h4>
      </Col>
      <Col
        xs={4}
        className={classNames(
          'simulation-menu cursor-pointer border-primary border-right p-0',
          {
            active: activeTab === SimulationTabs.CAMPAIGN_HQ,
          },
        )}
        onClick={() => setActiveTab(SimulationTabs.CAMPAIGN_HQ)}
      >
        <h4 className="my-3 font-weight-normal">Campaign HQ</h4>
      </Col>
      <Col
        xs={4}
        className={classNames('simulation-menu cursor-pointer p-0', {
          active: activeTab === SimulationTabs.LOCAL_BRANCH,
        })}
        onClick={() => setActiveTab(SimulationTabs.LOCAL_BRANCH)}
      >
        <h4 className="my-3 font-weight-normal">Local Branch</h4>
      </Col>
    </Row>
    {activeTab === SimulationTabs.ACTION_TABLE ? (
      <Row className="m-0 border-primary border-bottom">
        <Col
          xs={3}
          className="simulation-menu cursor-pointer border-primary border-right p-0"
        >
          <h6 className="my-2">SYSTEMS</h6>
        </Col>
        <Col
          xs={6}
          className="simulation-menu cursor-pointer border-primary border-right p-0"
        >
          <h6 className="my-2">MITIGATIONS</h6>
        </Col>
        <Col xs={3} className="simulation-menu cursor-pointer p-0">
          <h6 className="my-2">EVENT LOG</h6>
        </Col>
      </Row>
    ) : (
      <Row className="m-0 border-primary border-bottom">
        <Col
          xs={3}
          className="simulation-menu cursor-pointer border-primary border-right p-0"
        >
          <h6 className="my-2">INJECTS & RESPONSES</h6>
        </Col>
        <Col
          xs={6}
          className="simulation-menu cursor-pointer border-primary border-right p-0"
        >
          <h6 className="my-2">
            {activeTab === SimulationTabs.CAMPAIGN_HQ
              ? 'CAMPAIGN ACTIONS'
              : 'LOCAL ACTIONS'}
          </h6>
        </Col>
        <Col xs={3} className="simulation-menu cursor-pointer p-0">
          <h6 className="my-2">SECURITY ACTIONS</h6>
        </Col>
      </Row>
    )}
  </div>
);

export default Header;