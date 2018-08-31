import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Content from './Content'
import './App.css'

class App extends Component {
    render() {
        return (
            <div className={'app'}>
                <Sidebar />
                <Content />
            </div>
        )
    }
}

export default App