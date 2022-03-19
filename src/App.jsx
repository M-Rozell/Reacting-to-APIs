
import { useState, useEffect } from "react";

const App = () => {

    const [films, setFilms] = useState([]);
    const [people, setPeople] = useState([]);

    const getData = async () => {
        const res = await fetch('https://ghibliapi.herokuapp.com/films')
        const data = await res.json()
        setFilms(data);
    }
    //getData();

    const getPeople = async () => {
        const res = await fetch('https://ghibliapi.herokuapp.com/people')
        const data = await res.json()
        setPeople(data);
    }
    //getPeople();

    const myFilmsArr = films.map(val => {
        return <>
            <div className="col-md-6">
                <div className='card m-5 shadow p-1 bg-white rounded'>
                    <div className='card-body'>
                        <h6 className="card-title">{val.title}</h6>
                        <p className="card-text">{val.description}</p>
                        <p>{val.release_date}</p>
                    </div>
                </div>
            </div>
        </>
    })

    const myPeopleArr = people.map(val => {
        return <>
            <div className="col-md-6">
                <div className='card m-5 shadow p-1 bg-white rounded'>
                    <div className='card-body'>
                        <h6 className="card-title">{val.name}</h6>
                        <p className="card-text">{val.gender}</p>
                        <p>{val.age}</p>
                        <a href={val.url} className="btn btn-light">Go To The People</a>
                    </div>
                </div>
            </div>
        </>
    })

    return (
        <>
            <button className='m-5' onClick={() => getData()} >Load Films</button>
            <button className='m-5' onClick={() => getPeople()} >Load People</button>
            <div>
                {myFilmsArr}
                {myPeopleArr}
            </div>
        </>
    )
};
export default App;



























