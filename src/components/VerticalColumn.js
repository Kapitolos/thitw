import React from 'react';

function VerticalColumn() {
  return (
    <div className="vertical-column">
      <h1 className="bar-name">The Hole In The Wall</h1>
      {/* <p className="bar-blurb">Cozy vibes, Craft Beer, Scotch, and Grub.</p> */}
      <p className="bar-blurb">2867A Dundas St W</p>
      <p className="bar-blurb">Mon-Sun 5 - late</p>
      {/* <p className="bar-blurb">5 - late</p> */}
      <p className="bar-blurb">Kitchen</p>
        <p className="bar-blurb">Sun - Thur </p>
        <p className="bar-blurb">5 - 11</p>
        <p className="bar-blurb">Fri - Sat </p>
        <p className="bar-blurb">5 -12</p>

    </div>
  );
}

export default VerticalColumn;
