import React, { useState, useEffect } from 'react';
// import { renderMath } from '../utils/Katex';

const Home = () => {


  const [expression, setExpression] = useState(
    ''
  );
  useEffect(() => {
    if (window.renderMathInElement) {
      window.renderMathInElement(document.body);
    }
  }, [expression]);

  const handleChange = (e) => {
    // Replace single backslashes with double backslashes
    // const value = e.target.value.replace(/\\/g, '\\\\');
    // setExpression(value);
    const value = e.target.value;
    setExpression(value);
  };

  return (
    <div>
      {/* <h1>KaTeX in React</h1> */}
      {/* <p>
      Here is an inline math equation: <span dangerouslySetInnerHTML={{ __html: inlineMath }} />
    </p>
    <p>
      Here is a block math equation:
      <div dangerouslySetInnerHTML={{ __html: blockMath }} />
    </p> */}
      {/* <div>
      <label>
        Inline Expression:
        <input
          type="text"
          value={inlineExpression}
          onChange={(e) => setInlineExpression(e.target.value)}
        />
      </label>
    </div>
    <div>
      <label>
        Block Expression:
        <input
          type="text"
          value={blockExpression}
          onChange={(e) => setBlockExpression(e.target.value)}
        />
      </label>
    </div> */}
      <div>
        <h1>KaTeX in React</h1>
        {/* <p dangerouslySetInnerHTML={{ __html: renderMath(expression) }} /> */}
        <p>{expression}</p>

        <div>
          <label>
            Expression:
            <input
              type="text"
              value={expression}
              onChange={handleChange}
              style={{ width: '100%' }}
            />
          </label>
        </div>
      </div>
    </div>
  )
}

export default Home
