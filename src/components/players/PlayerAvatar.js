import React from 'react';

const PlayerAvatar = (props) => {
  const {avatar, name} = props;
return (
  <div title={name} className={`${avatar} player-avatar`}>{props.children}</div>
);
}

export default PlayerAvatar;