import React, { Component } from "react"

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

class App extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            character: {}
        }
    }

    componentDidMount() {
        this.setState({ loading: true })

        // About CORS
        // https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development

        // To make it work i just add an extension to chrome
        //
        // https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en

        fetch("https://swapi.co/api/people/1")
            //.then(response => response.json())
            .then(function(response) {
                if (!response.ok) {
                  throw new Error('HTTP error, status = ' + response.status);
                }
                return response.json();
              })
            .then(data => {
                this.setState({
                    loading: false,
                    character: data
                })
            })
    }

    render() {
        const text = this.state.loading ? "loading..." : this.state.character.name
        return (
            <div>
                <p>{text}</p>
            </div>
        )
    }
}

export default App
