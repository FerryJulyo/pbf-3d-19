import React from 'react';

function DaftarMenu(props) {
    return (

        <div class="tm-product">
            <img src={props.gambar} alt="Product" />
            <div class="tm-product-text">
                <h3 class="tm-product-title">{props.judul}</h3>
                <p class="tm-product-description">{props.deskripsi}</p>
            </div>
            <div class="tm-product-price">
                <a href="#" class="tm-product-price-link tm-handwriting-font"><span class="tm-product-price-currency"/> {props.harga} </a>
            </div>
        </div>

    );
}

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,         // jika terjadi gagal ambil data dari API
            isLoaded: false,     // untuk status ketika sedang memuat
            dataMenu: []      // untuk menampung data API
        };
    }

    // ... isi method selanjutnya di sini ...
    componentDidMount() {
        fetch("https://my-json-server.typicode.com/FerryJulyo/FerryJulyo.github.io/blog")
            .then(response => response.json())
            .then(
                (dataJson) => {
                    this.setState({
                        isLoaded: true,
                        dataMenu: dataJson
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                })
    }

    render() {
        const { error, isLoaded, dataMenu } = this.state;

        if (error) {
            return <div>Terjadi galat: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Sedang memuat...</div>;
        } else {
        
            return (
                <div class="tm-menu-product-content col-lg-9 col-md-9"> 
                    {
                        dataMenu.map(menu => {
                            return <DaftarMenu judul={menu.judul} deskripsi={menu.deskripsi} gambar={menu.gambar} harga={menu.harga} />
                        })
                    }
                </div>
            );
        }
    }
}


export default Blog;