import {ButtonGroup, Col, FloatingLabel, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";

export const InputIncomeForm = (showIncomeForm, setShowIncomeForm) => {
  const handleHideShowForm = () => {
    showIncomeForm.setShowIncomeForm(false)
  }

  if (showIncomeForm.showIncomeForm === true) {
    return (
      <Row className="g-2">
        <Col xs={6}>
          <FloatingLabel controlId="floatingInputGrid" label="Название">
            <Form.Control type="text" placeholder="Зарплата" />
          </FloatingLabel>
        </Col>
        <Col xs={6}>
          <FloatingLabel controlId="floatingInputGrid" label="Доход">
            <Form.Control type="number" placeholder="50000" />
          </FloatingLabel>
        </Col>
        <Col xs={6}>
          <FloatingLabel controlId="floatingInputGrid" label="С">
            <Form.Control type="month" />
          </FloatingLabel>
        </Col>
        <Col xs={5}>
          <FloatingLabel controlId="floatingInputGrid" label="По">
            <Form.Control type="month" />
          </FloatingLabel>
        </Col>
        <Col>
          <ButtonGroup vertical>
            <Button variant="success" size="sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi bi-patch-check" viewBox="0 0 16 16">
              <path fillRule="evenodd"
                    d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
              <path
                d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>
            </svg>
          </Button>
          <Button variant="secondary"
                  size="sm"
                  onClick={handleHideShowForm}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi bi-file-excel" viewBox="0 0 16 16">
              <path
                d="M5.18 4.616a.5.5 0 0 1 .704.064L8 7.219l2.116-2.54a.5.5 0 1 1 .768.641L8.651 8l2.233 2.68a.5.5 0 0 1-.768.64L8 8.781l-2.116 2.54a.5.5 0 0 1-.768-.641L7.349 8 5.116 5.32a.5.5 0 0 1 .064-.704z"/>
              <path
                d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
            </svg>
          </Button>
          </ButtonGroup>
        </Col>
      </Row>
    )
  }
}
