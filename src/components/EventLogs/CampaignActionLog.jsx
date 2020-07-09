import React, { useMemo } from 'react';
import { Row, Col, Card } from 'react-bootstrap';

import Log from './Log';
import { useStaticData } from '../StaticDataProvider';
import { msToMinutesSeconds, numberToUsd } from '../../util';

const CampaignActionLog = ({ game_timer, type, action_id }) => {
  const { actions } = useStaticData();
  const action = useMemo(() => actions[action_id], [
    actions,
    action_id,
  ]);

  return (
    <Log title={`${msToMinutesSeconds(game_timer)} - ${type}`}>
      <Card.Body>
        <Row>
          <Col xs={6}>{action.description}</Col>
          <Col xs={2} className="text-right">
            <span className="font-weight-bold">Cost: </span>
            {numberToUsd(action.cost)}
          </Col>
          <Col xs={2} className="text-right">
            <span className="font-weight-bold">Poll: </span>+
            {action.poll_increase}%
          </Col>
          <Col xs={2} className="text-right">
            <span className="font-weight-bold">Raise: </span>
            {numberToUsd(action.budget_increase)}
          </Col>
        </Row>
      </Card.Body>
    </Log>
  );
};

export default CampaignActionLog;
