import {ButtonGroup, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";

export const InputIncomeForm = ({
                                  showIncomeForm,
                                  setShowIncomeForm,
                                  incomeSources,
                                  setIncomeSources
                                }) => {
  const [newSource, setNewSource] = useState({
    id: '',
    name: '',
    income: '',
    startAt: '',
    endAt: ''
  });

  const [validated, setValidated] = useState(false);

  const handleHideShowForm = () => {
    setShowIncomeForm(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      const id = incomeSources.length ? Math.max(incomeSources.map(source => source.id)) + 1 : 1;
      const updatedIncomeSources = [...incomeSources, {...newSource, id}];
      setIncomeSources(updatedIncomeSources);
      setShowIncomeForm(false);
      setNewSource({id: '', name: '', income: '', startAt: '', endAt: ''});
    }

    setValidated(true);
  };

  if (showIncomeForm === true) {
    return (
      <Row className="g-2">
        <Form className="IncomeForm" noValidate validated={validated} onSubmit={handleSubmit} >
          <Row className="mb-3">
            <Form.Group md="6" controlId="validationCustom01">
              <Form.Control
                required
                type="text"
                placeholder="Зарплата"
                value={newSource.name}
                onChange={(e) => setNewSource({...newSource, name: e.target.value})}
              />
            </Form.Group>
            <Form.Group md="6" controlId="validationCustom02">
              <Form.Control
                required
                type="number"
                placeholder="50000"
                value={newSource.income}
                onChange={(e) => setNewSource({...newSource, income: e.target.value})}
              />
            </Form.Group>
            <Form.Group md="6" controlId="validationCustom03">
              <Form.Control
                required
                type="month"
                value={newSource.startAt}
                onChange={(e) => setNewSource({...newSource, startAt: e.target.value})}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="6" controlId="validationCustom04">
              <Form.Control
                required
                type="month"
                value={newSource.endAt}
                onChange={(e) => setNewSource({...newSource, endAt: e.target.value})}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <ButtonGroup>
            <Button
              type="submit"
              variant="success"
              size="sm"
            >
              Сохранить
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={handleHideShowForm}
            >
              Закрыть
            </Button>
          </ButtonGroup>
        </Form>
      </Row>
    )
  }
}
