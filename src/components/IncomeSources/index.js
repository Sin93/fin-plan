import Button from 'react-bootstrap/Button';
import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import {InputIncomeForm} from "../InputIncomeForm";
import {IncomeRow} from "../IncomeRow";
import {Col} from "react-bootstrap";

const IncomeSources = ({ incomeSources, setIncomeSources }) => {
  const [showIncomeForm, setShowIncomeForm] = useState(false)

  const handleShowIncomeForm = () => {
    setShowIncomeForm(true)
  }

  return (
    <Col>
      <h5>Доходы</h5>
      <Table striped hover>
        <tbody>
          {incomeSources.map((income) => (<IncomeRow key={income.id} incomeSources={income} />))}
        </tbody>
      </Table>
      <InputIncomeForm showIncomeForm={showIncomeForm} setShowIncomeForm={setShowIncomeForm} incomeSources={incomeSources} setIncomeSources={setIncomeSources}/>
      { !showIncomeForm ? <Button variant="primary" onClick={handleShowIncomeForm}>Добавить</Button> : "" }
    </Col>
  )
};

export default IncomeSources;