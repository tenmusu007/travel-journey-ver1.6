import React from 'react';
function Card(props) {
    const cards = props.atsu.map((item, index) =>{
        return(
            <div key= {index} className='card-container'>
                <div className='img-box'>
                    <img src={ item.imageUrl} alt="" />
                </div>
                <div className='card-contxt'>
                    <h3 className='location'>{ item.location}</h3>
                    <h1 className='title'>{ item.title}</h1>
                    <p className='sdate-edate'>{ item.startDate} - { item.endDate}</p>
                    <p className='txt'>{ item.description}</p>
                </div>
            </div>
        )    
    });

    return (
        <section className='card'>
            {cards}
        </section>
    )
}
export default Card;


