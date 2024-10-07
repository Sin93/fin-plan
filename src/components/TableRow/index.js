const TableRow = ({month}) => {
  return (
    <tr>
      <td>{month.month}</td>
      <td>{month.incomes[0].income}</td>
      <td>70000</td>
      <td>30000</td>
      <td>30000</td>
      <td>30000</td>
    </tr>
  )
    ;
};

export default TableRow