import React, { Component } from 'react'
import './app.css'
import Header from '../header'
import ErrorBoundry from '../error-boundry'
import SwapiService from "../../services/swapi-service"
import RandomPlanet from '../random-planet'
import { SwapiServiceProvider } from '../swapi-service-context'
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages'


export default class App extends Component {

  swapiService = new SwapiService()

  render() {

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="stardb-app">

            <Header />

            <RandomPlanet />

            <PeoplePage />

            <PlanetsPage />

            <StarshipsPage />

          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    )
  }
}
