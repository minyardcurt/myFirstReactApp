import { useState } from 'react';

function Sidebar() {
  const [bgColor, setBgColor] = useState('#a8dadc');

  return (
    <aside style={{ backgroundColor: bgColor, padding: '16px', width: '200px' }}>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {['#a8dadc', '#ffafcc', '#caffbf'].map((color) => (
          <li key={color}>
            <button
              onClick={() => setBgColor(color)}
              style={{ backgroundColor: color, margin: '5px', width: '100%' }}
            >
              {color}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;