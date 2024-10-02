import React from "react";

export const IncomeRow = (incomeSources) => {
  return (
    <tr>
      <td>{incomeSources.incomeSources.name}</td>
      <td>{incomeSources.incomeSources.income}</td>
      <td>{incomeSources.incomeSources.startAt}</td>
      <td>{incomeSources.incomeSources.endAt}</td>
    </tr>
  )
}