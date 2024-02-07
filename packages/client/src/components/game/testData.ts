import { playerColors } from '../../constants/game'
import { IPlayerInfo, IRaundInfo, IRaundPlayerInfo } from '../../types/game'

export const dataRaundInfoTest = {
  number: 1,
  masterUserId: 3,
  masterAssociation: 'Приятная суета',
  mastercardId: 5,
}

/*
 * Метод генерирует рандомное количество игроков и рандомно распределяет их по игровому полю
 * */
export const getPlayersJSON = (numberPlayers: number) => {
  const playerJSON = <IPlayerInfo[]>[]
  const points = <IRaundPlayerInfo[]>[]

  for (let i = 0; i < numberPlayers; i++) {
    playerJSON.push({
      userId: 'W3' + i,
      login: 'login ' + i + 1,
      color: playerColors[i],
    })
    points.push({
      userId: 'W3' + i,
      selectedCard: i,
      master: i == 2 ? true : false,
      pointsOld: 15,
      pointsAdd: i == 2 ? -3 : i + 1,
    }) //  pointsAdd: i == 2 ? -3 : i + 1,
  }
  const pointsJSON: IRaundInfo = {
    id: 1,
    masterUserId: 'W32',
    masterAssociation: 'Приятная суета',
    mastercardId: 5,
    players: points,
  }
  return { playerJSON, pointsJSON }
}
export const getApiPlayersInfo = (numberPlayers: number) => {
  const { playerJSON } = getPlayersJSON(numberPlayers)
  return playerJSON
}
export const getApiRaundInfo = (numberPlayers: number) => {
  const { pointsJSON } = getPlayersJSON(numberPlayers)
  return pointsJSON
}
