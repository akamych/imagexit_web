import { useEffect, useState } from 'react'
import { ICardElement } from '../types/game'

/*
 * Хук отвечающий за ядро игры
 * Здесь должны находиться данные о самой игре и сопутствующей информации
 * */
export const UseGameCore = () => {
  const [isStartGame, setIsStartGame] = useState(false)
  const [fullScreen, setFullScreen] = useState(false)
  const [visibleField, setVisibleField] = useState(false)

  const [selectedCard, setSelectedCard] = useState<ICardElement | null>(null)

  useEffect(() => {
    document.addEventListener('fullscreenchange', () => {
      if (!document.fullscreenElement) {
        setFullScreen(false)
      } else {
        setFullScreen(true)
      }
    })
  }, [])

  return {
    isStartGame,
    setIsStartGame,
    selectedCard,
    setSelectedCard,
    visibleField,
    setVisibleField,
    fullScreen,
    setFullScreen,
  }
}
