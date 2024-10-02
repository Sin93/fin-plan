import './App.css';
import React, {useState, useEffect} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import Settings from './components/Settings/index';
import ResultsTable from './components/ResultsTable/index';
import getUpcomingMonths from "./hooks/UpdateMonth";

const App = () => {
  const [years, setYears] = useState(0);
  const [monthList, setMonthList] = useState([]);
  const [incomeSources, setIncomeSources] = useState([{
    id: 1,
    name: 'Зарплата',
    income: 60000,
    startAt: '09.2024',
    endAt: '12.2024'
  }]);
  const [expenseSources, setExpenseSources] = useState([{
    id: 1,
    name: 'Бытовые нужды',
    income: 40000,
    startAt: '09.2024',
    endAt: '12.2024'
  }]);
  const [savingsMethods, setSavingsMethods] = useState([]);

  useEffect(() => {
    if (years <= 30) {
      setMonthList(getUpcomingMonths(years * 12));
    } else {
      setMonthList(getUpcomingMonths(0));
    }
  }, [years]);

  return (
    <Container>
      <Row>
        <Col>
          <Settings
            years={years}
            setYears={setYears}
            incomeSources={incomeSources}
            setIncomeSources={setIncomeSources}
            expenseSources={expenseSources}
            setExpenseSources={setExpenseSources}
            savingsMethods={savingsMethods}
            setSavingsMethods={setSavingsMethods}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <ResultsTable monthList={monthList} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
