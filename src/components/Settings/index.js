import React from 'react';
import Form from 'react-bootstrap/Form';


const Settings = ({
  years,
  setYears
}) => {
  return (
    <Form className="formYears">
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
    </Form>
  );
};

export default Settings;
