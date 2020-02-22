import React from 'react';

const PlayerAvatar = (props) => {
  const {avatar, name, style} = props;
return (
  <div style={style} title={name} className={`${avatar} player-avatar`}>{props.children}</div>
);
}

export default PlayerAvatar;