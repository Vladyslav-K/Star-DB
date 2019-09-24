import React, { Component } from 'react'
import ErrorBoundry from '../error-boundry'
import ItemList from '../item-list/item-list'
import PersonDetails from '../person-details/person-details'
import ErrorIndicator from '../error-indicator/error-indicator'
import SwapiService from '../../services/swapi-service'
import Row from '../row'
import './people-page.css'


export default class PeoplePage extends Component {

  swapiService = new SwapiService()

  state = {
    selectedPerson: 3,
  }

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson })
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople} >
        {(item) => `${item.name} (${item.birthYear})`}
      </ItemList>
    )

    const personDetails = (
      <ErrorBoundry>
        <PersonDetails personId={this.state.selectedPerson} />
      </ErrorBoundry>
    )

    return (
      <Row left={itemList} right={personDetails} />
    )
  }
}