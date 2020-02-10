import React from 'react'
import 'isomorphic-fetch';
import 'es6-promise';
import Card from './components/Card'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(obj =>
                this.setState({ movies: [...obj] })
            )

    }


    render() {
        return (
            <>
                <section className='row justify-content-center my-3'>
                    <div className="col-sm-6">
                        {this.state.movies.map(info => (
                            <Card key={info.id} title={info.title} description={info.description} />
                        ))}
                    </div>
                </section>
            </>
        )
    }
}



export default App;