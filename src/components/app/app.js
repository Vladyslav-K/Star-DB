import React, { Component } from 'react'
import './app.css'
import Header from '../header'
import ErrorBoundry from '../error-boundry'
import SwapiService from "../../services/swapi-service"
import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList
} from '../sw-components'

export default class App extends Component {

  swapiService = new SwapiService()

  render() {

    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Header />

          <PersonDetails itemId={11} />

          <PlanetDetails itemId={5} />

          <StarshipDetails itemId={9} />

          <PersonList />

          <PlanetList />

          <StarshipList />

        </div>
      </ErrorBoundry>
    )
  }
}
