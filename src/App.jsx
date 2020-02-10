import React from 'react'
import 'isomorphic-fetch';
import 'es6-promise';
import MovieCard from './components/MovieCard'
import PeopleCard from './components/PeopleCard'
import { FaVideo, FaUserFriends } from 'react-icons/fa';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            loadMovies: false,
            people: [],
            loadPeople: false
        }
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(movies =>
                this.setState({ movies })
            )
        fetch("https://ghibliapi.herokuapp.com/people")
            .then(res => res.json())
            .then(people =>
                this.setState({ people })
            )

    }

    handleLoadFilmsButton() {
        this.setState({
            loadMovies: true,
            loadPeople: false
        })
    }

    handleLoadPeopleButton() {
        this.setState({
            loadMovies: false,
            loadPeople: true
        })
    }

    handleBackButton() {
        this.setState({
            loadPeople: false,
            loadMovies: false
        })
    }

    render() {
        if (this.state.loadPeople === true) {
            return (
                <>
                    <button type="button" className="btn btn-secondary btn-lg btn-block sticky-top"
                        onClick={e => this.handleBackButton(e)}
                    >BACK</button>
                    <section className='row justify-content-center my-3'>
                        <div className="col-sm-6">
                            {this.state.people.map(info => (
                                <PeopleCard key={info.id} name={info.name} age={info.age} gender={info.gender} id={info.id} />
                            ))}
                        </div>
                    </section>
                </>
            )
        } else if (this.state.loadMovies === true) {
            return (
                <>
                    <button type="button" className="btn btn-secondary btn-lg btn-block sticky-top"
                        onClick={e => this.handleBackButton(e)}>BACK</button>
                    <section className='row justify-content-center my-3'>
                        <div className="col-sm-6">
                            {this.state.movies.map(info => (
                                <MovieCard key={info.id} title={info.title} description={info.description} />
                            ))}
                        </div>
                    </section>
                </>
            )
        } else {
            return (
                <div className="card bg-dark text-white">
                    <img src="https://ghibliapi.herokuapp.com/images/logo.svg" alt="..." />
                    <button type="button" className="btn btn-primary btn-lg btn-block"
                        onClick={e => this.handleLoadFilmsButton(e)}>

                        <h1><FaVideo /> </h1>

                    </button>
                    <button type="button" className="btn btn-primary btn-lg btn-block"
                        onClick={e => this.handleLoadPeopleButton(e)}>
                        <h1><FaUserFriends /></h1>
                    </button>
                </div>
            )
        }
    }
}
export default App;