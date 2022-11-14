import React from 'react'


function Card() {

    return (
        <div className='card'>
            <header className='card_header'>
                <img src={process.env.PUBLIC_URL + "/img/groot.jpg"} alt="Groot" />
                <h1>I AM GROOT !</h1>
            </header>

            <section className='card_section'>
                <h2>Perso Infos</h2>

                <div className='card_section_infos'>
                    <div>
                        <h3>Age :</h3>
                        <p>Iam groot</p>
                    </div>
                    <div>
                        <h3>Origin Planet :</h3>
                        <p>Iam groot</p>
                    </div>
                    <div>
                        <h3>Team :</h3>
                        <p>Iam groot</p>
                    </div>
                </div>

                <div className='card_section_bio'>
                    <h2>Biography</h2>
                    <p>Iam groot Iam groot Iam groot Iam groot Iam groot Iam groot Iam groot Iam groot Iam groot Iam groot
                        Iam groot Iam groot Iam groot Iam groot Iam groot Iam groot Iam groot Iam groot Iam groot Iam groot
                        Iam groot Iam groot
                    </p>
                </div>

            </section >


        </div >
    )

}

export default Card;
