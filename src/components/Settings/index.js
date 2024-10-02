import React from 'react';
import Form from 'react-bootstrap/Form';
import IncomeSources from "../IncomeSources";
import ExpenseSources from "../ExpenseSources";
import {Col, Row} from 'react-bootstrap';


const Settings = ({
  years,
  setYears,
  incomeSources,
  setIncomeSources,
  expenseSources,
  setExpenseSources,
  savingsMethods,
  setSavingsMethods,
}) => {
  return (
    <Form>
      <Form.Group controlId="formYears">
        <Form.Label>Количество лет (не больше 30)</Form.Label>
        <Form.Control
          type="number"
          value={years}
          min={0}
          max={30}
          onChange={(event) => setYears(event.target.value)}
        />
      </Form.Group>
      <Row>
        <Col>
          <IncomeSources incomeSources={incomeSources} setIncomeSources={setIncomeSources}/>
        </Col>
        <Col>
          <ExpenseSources expenseSources={expenseSources} setExpenseSources={setExpenseSources}/>
        </Col>
      </Row>
    </Form>
  );
};

export default Settings;
