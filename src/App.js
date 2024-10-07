import './App.css';
import React, {useState, useEffect} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import Settings from './components/Settings/index';
import ResultsTable from './components/ResultsTable/index';
import getUpcomingMonths from "./utils/UpdateMonth";
import IncomeSources from "./components/IncomeSources";
import ExpenseSources from "./components/ExpenseSources";

const App = () => {
  const [years, setYears] = useState(0);
  const [monthList, setMonthList] = useState([]);
  const [incomeSources, setIncomeSources] = useState([{
    id: 0,
    name: 'Зарплата',
    income: 60000,
    startAt: '2024-10',
    endAt: '2024-12'
  }]);
  const [expenseSources, setExpenseSources] = useState([{
    id: 1,
    name: 'Бытовые нужды',
    income: 40000,
    startAt: '2024-10',
    endAt: '2024-12'
  }]);
  const [savingsMethods, setSavingsMethods] = useState([]);

  useEffect(() => {
    if (years <= 30) {
      setMonthList(getUpcomingMonths(
        {
          numMonths: years * 12,
          incomeSources: incomeSources,
          expenseSources: expenseSources,
          savingsMethods: savingsMethods
        }
      ));
    } else {
      setMonthList(getUpcomingMonths(0));
    }
  }, [expenseSources, incomeSources, savingsMethods, years]);

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
        <IncomeSources incomeSources={incomeSources} setIncomeSources={setIncomeSources}/>
        <Col>
          <ExpenseSources expenseSources={expenseSources} setExpenseSources={setExpenseSources}/>
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
