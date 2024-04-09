import React from "react";
import './App.css'

export default () => {

    const imageUrl = 'https://lh3.googleusercontent.com/AsaWrT9AJ2qEh3-fJ6evhk5A7xh01IqCSBaK2CA5lckHzb4Uz6isBUBScmdBNNZfNPHw19HTMx4-5TrLRznSu7KiamnySNDbKyfQfUzH=s660'

    return (
        <div className="app">

            <div className="img">
                <img src={imageUrl} alt="" className="img" />
                <div className="pesquisar">
                    <p>pesquise no google ou digite um url</p>
                </div>
            </div>


        </div>
    )

}

