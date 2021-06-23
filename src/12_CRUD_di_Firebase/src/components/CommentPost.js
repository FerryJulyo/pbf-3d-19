import React from 'react';
import API from '../services/Komentar/comment';


function DaftarComment(props) {
  return (
    <div>
      <h3>{props.nama}</h3>
      <div>{props.isiComment}</div>
    </div>
  );
}

export default class CommentPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataComment: [],      // untuk menampung data API
      postComment: {
        userId: 1,
        nama: '',
        komentar: '',
        id: ''
      }
    };
  }

  ambilDataDariServerAPI = () => {
    API.getComment().then(result => {
      this.setState({
        dataComment: result
      })
    })
  }

  componentDidMount() {
    this.ambilDataDariServerAPI()
  }

  render() {
    const { dataComment, postComment } = this.state;

    return (
      <div>
        <h2>Daftar Komentar</h2>
        {
          dataComment.map(comment => {
            return (
              <div key={comment.id}>
                <DaftarComment nama={comment.nama} isiComment={comment.komentar} />
                <button variant="danger" value={comment.id} onClick={this.handleTombolHapus}>Hapus</button>
                <hr></hr>
              </div>
            )
          })
        }        
        <div>
          <form onSubmit={this.handleTombolSimpan}>
            <label>
              Nama:
                <input type="text" name="nama" defaultValue={postComment.nama} onChange={this.handleOnChange} />
            </label>
            <label>
              Komentar :
                <input type="textarea" name="komentar" defaultValue={postComment.komentar} onChange={this.handleOnChange} />
            </label>
            <input type="submit" value="Simpan" />
          </form>
        </div>
        <hr></hr><hr></hr>
      </div>
    );
  }

  handleTombolSimpan = (e) => {
    e.preventDefault();

    API.postComment(this.state.postComment)
      .then((response) => {
        this.ambilDataDariServerAPI();    // refresh data
        alert('Data berhasil disimpan!');
      });
  }

  handleOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState(prevState => {
      prevState.postComment[name] = value;
      return {
        postComment: prevState.postComment
      };
    });
  }

  handleTombolHapus = (e) => {
    e.preventDefault();

    API.deleteComment(e.target.value)
      .then((response) => {
        this.ambilDataDariServerAPI();    // refresh data
        alert('Data berhasil dihapus!');
      });
  }

}