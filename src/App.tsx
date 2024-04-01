import React, { useEffect, useState } from 'react'
import { DATA } from './constans'
import { Switch } from './components/Switch'
import { List } from './components/List'
import { Data, Direction } from './models'
import { ListItem } from './components/ListItem'

const inverseDirection = (direction: Direction): Direction =>
  direction === 'row' ? 'column' : 'row'

const options = [
  { label: 'List', value: 'column' },
  { label: 'Tiles', value: 'row' },
]

export const App = () => {
  const [direction, setDirection] = useState<Direction>('column')
  const [dataList, setData] = useState<Data[] | null>(null)

  useEffect(() => {
    setTimeout(() => {
      setData(DATA) //имитируем загрузку
    }, 1000)
  }, [])

  if (!dataList) return <h3>Загрузка</h3>

  return (
    <>
      <Switch
        options={options}
        onChange={(value) => setDirection(value as Direction)}
        value={direction}
      />
      <List direction={direction} gap={20}>
        {dataList.map(({ id, name, phone, mail }) => (
          <ListItem key={id}>
            <List direction={inverseDirection(direction)} withBorder>
              <ListItem>{name}</ListItem>
              <ListItem>{phone}</ListItem>
              <ListItem>{mail}</ListItem>
            </List>
          </ListItem>
        ))}
      </List>
    </>
  )
}
