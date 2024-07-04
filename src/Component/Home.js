import React, { useState } from 'react';
import { renderMath } from '../utils/Katex';

const Home = () => {
    
    const [inlineExpression, setInlineExpression] = useState('\\int_0^\\infty x^2 dx');
    const [blockExpression, setBlockExpression] = useState('\\int_0^\\infty x^2 dx');
 
    const inlineMath = renderMath(inlineExpression);
    const blockMath = renderMath(blockExpression, { displayMode: true });
    const [expression, setExpression] = useState(
        'The sum of the infinite series 1 + \\left(1+\\frac{1}{2}\\right)\\left(\\frac{1}{3}\\right)+\\left(1+\\frac{1}{2}+\\frac{1}{2^2}\\right)\\left(\\frac{1}{3^2}\\right)+ \\ldots \\infty is'
      );
    
      const handleChange = (e) => {
        // Replace single backslashes with double backslashes
        // const value = e.target.value.replace(/\\/g, '\\\\');
        // setExpression(value);
        setExpression(e.target.value);
      };
  return (
    <div>
    <h1>KaTeX in React</h1>
    <p>
      Here is an inline math equation: <span dangerouslySetInnerHTML={{ __html: inlineMath }} />
    </p>
    <p>
      Here is a block math equation:
      <div dangerouslySetInnerHTML={{ __html: blockMath }} />
    </p>
    <div>
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
    </div>
    <div>
      <h1>KaTeX in React</h1>
      <p dangerouslySetInnerHTML={{ __html: renderMath(expression) }} />
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
