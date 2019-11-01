import React, {Component} from 'react';
import './Create.css';
// import Show from "./Show";
// import Home from "./Home";
// import Table from "./Table";

class Create extends Component {

  // constructor(props){
  //   super(props)

  // }

  state = {
    nama: '',
    alamat: '',
    tahunLahir:'',
    tempatLahir:'',
    data: [],
    // ping: false

    // kode : '',
    // showComponent: true
  }
  
  handleSubmit = e => {
    e.preventDefault();
    if ((this.state.nama,
        this.state.alamat,
        this.state.tahunLahir,
        this.state.tempatLahir) === '') {
      alert('lengkapi data!')
    }
    else{
      this.setState({
        // ping : !this.state.ping,
        data : [...this.state.data,
          {
            nama: this.state.nama,
            alamat: this.state.alamat,
            tahunLahir: this.state.tahunLahir,
            tempatLahir: this.state.tempatLahir
          }
        ]
      },alert('berhasil menyimpan'))
    }
    // this.storage,
     

  }

  storage = e => {
    // this.setState({
      // ping : false
    // })
    localStorage.setItem("data", JSON.stringify(this.state.data))
  }

  handleChange = e => {
    e.preventDefault();
    const {name , value} = e.target
    this.setState({
      [name]: value }
      )

  }

  handleDel = e => {
    e.preventDefault();
    localStorage.clear();
    this.setState({
      data : []
    })
    alert('berhasil menghapus')
  }

  componentDidMount(){
    console.log('didmount')
    // let data = localStorage.getItem("data") 
    // ? JSON.parse(localStorage.getItem("data")) : []
    this.setState({data: JSON.parse(localStorage.getItem("data"))})
  }

  componentDidUpdate(){
    console.log('didupdate')
    // if (this.state.ping === true) {
      this.storage();
    // } 
    // else{
      // this.setState({data: localStorage.getItem("data")})
    // }

    
  }

  render() {
    console.log('render')
    return <div className="wrapper">
      <div className="form-wrapper">
        <h1> Create Data </h1>
        <form onSubmit={this.handleSubmit} noValidate>
          <div className="firstName">
            <label htmlFor="firstName"> Name </label>
            <input 
            type="text"
            className="nama" 
            placeholder="Masukan Nama" 
            name="nama" 
            noValidate 
            onChange={this.handleChange}
            />
          </div>
          <div className="address">
            <label htmlFor="address">Alamat</label>
            <input 
            type="text"
            className="" 
            placeholder="Masukan Alamat" 
            name="alamat" 
            noValidate 
            onChange={this.handleChange}
            />
          </div>
          <div className="email">
            <label htmlFor="email">Tahun Lahir</label>
            <input 
            type="number"
            className="" 
            placeholder="Masukan Tahun Kelahiran" 
            name="tahunLahir" 
            noValidate 
            onChange={this.handleChange}
            />
          </div>
          <div className="email">
            <label htmlFor="email">Tempat Lahir</label>
            <input 
            type="text"
            className="" 
            placeholder="Masukan Tempat Lahir" 
            name="tempatLahir" 
            noValidate 
            onChange={this.handleChange}
            />
          </div>
          <div className="createAccount">
            <button type="submit" onClick={this.handleSubmit}> SIMPAN </button>
            <button type="submit" onClick={this.handleDel}> HAPUS SEMUA </button>
          </div>
        </form>
      </div>
    </div>
  }
}



export default Create;
