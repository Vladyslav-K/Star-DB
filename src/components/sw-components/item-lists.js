import React from 'react'
import ItemList from '../item-list'
import { widthData } from '../hoc-helpers'
import SwapiService from '../../services/swapi-service'

const swapiService = new SwapiService()

const {
  getAllPeople,
  getAllPlanets,
  getAllStarships
} = swapiService

const widthChildFunction = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props} >
        {fn}
      </Wrapped>
    )
  }
}

const renderName = ({ name }) => <span> {name} </span>

const PersonList = widthData(widthChildFunction(ItemList, renderName), getAllPeople)

const PlanetList = widthData(widthChildFunction(ItemList, renderName), getAllPlanets)

const StarshipList = widthData(widthChildFunction(ItemList, renderName), getAllStarships)


export {
  PersonList,
  PlanetList,
  StarshipList
}