import React from 'react';

const Table = () => {
  const data = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Doe', age: 25 },
    { id: 3, name: 'Jane', age: 35 }
  ];
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
