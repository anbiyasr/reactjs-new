import React, {Component} from 'react';
import './Create.css';




const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class Create extends Component {

  

  state = {
    nama: '',
    alamat: '',
    tahunLahir:'',
    tempatLahir:'',
    data: [],
    formErrors: {
      nama: "",
      alamat: "",
      tahunLahir: "",
      tempatLahir: ""
    }

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

     

  }

  storage = e => {

    localStorage.setItem("data", JSON.stringify(this.state.data))
  }

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    switch (name) {
      case "nama":
        formErrors.nama =
          value.length < 3 ? "minimal 3 karakter" : "";
        break;
      case "alamat":
        formErrors.alamat =
          value.length < 3 ? "minimal 3 karakter" : "";
        break;
      case "tahunLahir":
        formErrors.tahunLahir =
          value.length < 1 ? "*wajib di isi" : "";
        break;
      case "tempatLahir":
        formErrors.tempatLahir =
          value.length < 3 ? "minimal 3 karakter" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  //   const {name , value} = e.target
  //   this.setState({
  //     [name]: value }
  //     )

  // }

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

    this.setState({data: JSON.parse(localStorage.getItem("data"))})
  }

  componentDidUpdate(){
    console.log('didupdate')

      this.storage();


    
  }

  render() {
    const { formErrors } = this.state;
    console.log('render')
    return <div className="wrapper">
      <div className="form-wrapper">
        <h1> Create Data </h1>
        <form onSubmit={this.handleSubmit} noValidate>
          <div className="firstName">
            <label htmlFor="firstName"> Name </label>
            <input 
            type="text"
            className={formErrors.nama.length > 0 ? "error" : null} 
            placeholder="Masukan Nama" 
            name="nama" 
            noValidate 
            onChange={this.handleChange}
            />
            {formErrors.nama.length > 0 && (
                <span className="errorMessage">{formErrors.nama}</span>
              )}
          </div>
          <div className="address">
            <label htmlFor="address">Alamat</label>
            <input 
            type="text"
            className={formErrors.alamat.length > 0 ? "error" : null}
            placeholder="Masukan Alamat" 
            name="alamat" 
            noValidate 
            onChange={this.handleChange}
            />
            {formErrors.alamat.length > 0 && (
                <span className="errorMessage">{formErrors.alamat}</span>
              )}
          </div>
          <div className="email">
            <label htmlFor="email">Tahun Lahir</label>
            <input 
            type="number"
            className={formErrors.tahunLahir.length > 0 ? "error" : null} 
            placeholder="Masukan Tahun Kelahiran" 
            name="tahunLahir" 
            noValidate 
            onChange={this.handleChange}
            />
            {formErrors.tahunLahir.length > 0 && (
                <span className="errorMessage">{formErrors.tahunLahir}</span>
              )}
          </div>
          <div className="email">
            <label htmlFor="email">Tempat Lahir</label>
            <input 
            type="text"
            className={formErrors.tempatLahir.length > 0 ? "error" : null}
            placeholder="Masukan Tempat Lahir" 
            name="tempatLahir" 
            noValidate 
            onChange={this.handleChange}
            />
            {formErrors.tempatLahir.length > 0 && (
                <span className="errorMessage">{formErrors.tempatLahir}</span>
              )}
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
