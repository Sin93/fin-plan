import Table from "react-bootstrap/Table";
import TableRow from "../TableRow/index";

const ResultsTable = (monthList) => {
  // Логика рендеринга таблицы на основе переданных данных
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Месяц</th>
          <th>Доходы</th>
          <th>Расходы</th>
          <th>Свободные средства</th>
          <th>Способы накопления</th>
          <th>Финальный объем активов</th>
        </tr>
      </thead>
      <tbody>
        {monthList.monthList.map((month) => (<TableRow key={month.id} month={month}/>))}
      </tbody>
    </Table>
  )
    ;
};

export default ResultsTable