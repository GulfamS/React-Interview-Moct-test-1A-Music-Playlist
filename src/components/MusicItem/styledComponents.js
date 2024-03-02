import styled from 'styled-components'

export const MusicListItem = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TrackInfoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 450px;
`

export const MusicTrackImage = styled.img`
  height: 80px;
  width: 150px;
  margin-right: 18px;
`

export const NameGenreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Name = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
`

export const Genre = styled.p`
  font-family: 'Roboto';
  color: #3b82f6;
  font-size: 15px;
`

export const DurationDeleteContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Duration = styled.p`
  color: #ffffff;
  font-size: 18px;
  margin-right: 25px;
`

export const DeleteButton = styled.button`
  background-color: transparent;
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
`
