import React, { useState } from 'react';

function Sidebar() {
  const [bgColor, setBgColor] = useState('#a8dadc');

  return (
    <div style={{ backgroundColor: bgColor, padding: '16px', width: '200px' }}>
      <ul style={{ padding: 0 }}>
        <li>
          <button onClick={() => setBgColor('#a8dadc')} style={{ backgroundColor: '#a8dadc', margin: '5px', width: '100%' }}>
            blue
          </button>
        </li>
        <li>
          <button onClick={() => setBgColor('#ffafcc')} style={{ backgroundColor: '#ffafcc', margin: '5px', width: '100%' }}>
            Pink
          </button>
        </li>
        <li>
          <button onClick={() => setBgColor('#caffbf')} style={{ backgroundColor: '#caffbf', margin: '5px', width: '100%' }}>
            Green
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;