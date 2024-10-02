import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, {useState} from "react";
import Table from "react-bootstrap/Table";
import {IncomeRow} from "../IncomeRow";
import {InputExpenseForm} from "../InputExpenseForm";

const ExpenseSources = ({ expenseSources, setExpenseSources }) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false)
  console.log(expenseSources)

  const handleShowExpenseForm = () => {
    setShowExpenseForm(true)
  }

  return (
    <Form.Group controlId="formYears">
      <h5>Расходы</h5>
      <Table striped hover>
        <tbody>
          {expenseSources.map((expense) => (<IncomeRow key={expense.id} incomeSources={expense} />))}
        </tbody>
      </Table>
      <InputExpenseForm showExpenseForm={showExpenseForm} setShowExpenseForm={setShowExpenseForm}/>
      { !showExpenseForm ? <Button variant="primary" onClick={handleShowExpenseForm}>Добавить</Button> : "" }
    </Form.Group>
  )
};

export default ExpenseSources;