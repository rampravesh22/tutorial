import React from 'react'
import { useState } from 'react'

const ToggleButton = () => {
  const [show, setShow] = useState(true)
  return (
		<div>
			<button type='button' onClick={()=>setShow(!show)}>Click</button>
			{show && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nostrum obcaecati similique repellendus deserunt officia exercitationem maxime, cupiditate, aliquid, velit labore. Quae sequi saepe sapiente provident illum libero. Impedit, accusantium.</p>}
		</div>
  );
}

export default ToggleButton