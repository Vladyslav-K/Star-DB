import React from 'react'
import ItemList from '../item-list'
import {
  withData,
  withSwapiService,
  withChildFunction,
  compose
} from '../hoc-helpers'



const mapPersonMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  }
}

const mapPlanetMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  }
}

const mapStarshipMethodToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  }
}

const renderName = ({ name }) => <span> {name} </span>

const PersonList = compose(
  withSwapiService(mapPersonMethodToProps),
  withData,
  withChildFunction(renderName)
)(ItemList)

const PlanetList = compose(
  withSwapiService(mapPlanetMethodToProps),
  withData,
  withChildFunction(renderName)
)(ItemList)

const StarshipList = compose(
  withSwapiService(mapStarshipMethodToProps),
  withData,
  withChildFunction(renderName)
)(ItemList)


export {
  PersonList,
  PlanetList,
  StarshipList
}