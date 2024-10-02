import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import {InputIncomeForm} from "../InputIncomeForm";
import {IncomeRow} from "../IncomeRow";

const IncomeSources = ({ incomeSources, setIncomeSources }) => {
  const [showIncomeForm, setShowIncomeForm] = useState(false)

  const handleShowIncomeForm = () => {
    setShowIncomeForm(true)
  }

  return (
    <Form.Group controlId="formYears">
      <h5>Доходы</h5>
      <Table striped hover>
        <tbody>
          {incomeSources.map((income) => (<IncomeRow key={income.id} incomeSources={income} />))}
        </tbody>
      </Table>
      <InputIncomeForm showIncomeForm={showIncomeForm} setShowIncomeForm={setShowIncomeForm}/>
      { !showIncomeForm ? <Button variant="primary" onClick={handleShowIncomeForm}>Добавить</Button> : "" }
    </Form.Group>
  )
};

export default IncomeSources;