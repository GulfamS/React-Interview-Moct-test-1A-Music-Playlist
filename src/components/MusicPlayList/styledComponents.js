import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #152850;
  min-height: 100vh;
  background-size: cover;
`

export const ArtistBg = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  height: 500px;
  background-size: cover;
  padding-left: 80px;
`

export const ArtistName = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 28px;
  font-weight: 500;
`

export const ArtistInfo = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 20px;
`

export const PlaylistContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 18px;
`

export const PlaylistHeading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: 700;
  margin-left: 40px;
`

export const SearchInput = styled.input`
  background-color: transparent;
  padding: 6px;
  border: 2px solid #cbd5e1;
  width: 18%;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  color: #cbd5e1;
`

export const MusicList = styled.ul`
  margin-left: 40px;
  margin-right: 40px;
`

export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NoSongsText = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 30px;
  font-weight: bold;
`
