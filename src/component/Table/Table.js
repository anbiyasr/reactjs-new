import React from 'react';
import MaterialTable from 'material-table';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Icon from '@material-ui/core/Icon';


export default function Table() {

  
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'nama' },
      { title: 'Alamat', field: 'alamat' },
      { title: 'Tahun Lahir', field: 'tahunLahir', type: 'numeric' },
      { title: 'Tempat Lahir', field: 'tempatLahir'}
    ],
    data: 
    // localStorage.getItem("data") 
    // ? 
    JSON.parse(localStorage.getItem("data"))
    // : []
  });
  console.log(state)
  return (
    <MaterialTable
      title="DATA DIRI"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data]
              data.push(newData)
              // window.localStorage.setItem("data",(state.columns[data]))
              // console.log(`${data}`)
              // let newData = localStorage.setItem('data', JSON.stringify(this.state.data))
              setState({ ...state, data })
              window.localStorage.setItem("data", JSON.stringify(data))
              //   ))
                
            },
             600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
              window.localStorage.setItem("data", JSON.stringify(data))
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
              window.localStorage.setItem("data", JSON.stringify(data))
            }, 600);
          }),
      }}
    />
  );
}
