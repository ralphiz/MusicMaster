import React, { Component } from 'react';
import './App.css';

class Profile extends Component {
  render() {
    let artist = {
      name: '',
      followers: {total: ''},
      images: [{url: ''}],
      genres: []
    };
    artist = this.props.artist !== null ? this.props.artist : artist;

    return (
      <div className="profile">
        <img
          alt="profile"
          className="profile-img"
          src={artist.images[0].url}
        />
        <div className="profile-info">
          <div className="profile-name">{artist.name}</div>
          <div className="profile-followers">Followers: {artist.followers.total}</div>
          <div className="profile-genres">{
            artist.genres.map((genre, i) => {
              return(
                <div
                  key={i}
                  className="genre">{genre}</div>
              )
            })
          }</div>
        </div>
      </div>
    )
  }
}

export default Profile;
