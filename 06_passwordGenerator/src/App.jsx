import React, { useState, useCallback, useEffect,useRef } from 'react';

const App = () => {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const num = '0123456789';
    const sym = '!@#$%^&*()_+[]~.{}|<>?/,;:';
    let characters = upperCase + lowerCase;

    if (numbers) characters += num;
    if (symbols) characters += sym;

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      generatedPassword += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setPassword(generatedPassword);
  }, [length, numbers, symbols]);

  const copyPassworToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,9999);
    window.navigator.clipboard.writeText(passwordRef.current.value)
  },[password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numbers, symbols, passwordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0 hover:bg-blue-900'
          onClick={copyPassworToClipboard}
        >
          Copy
        </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(parseInt(e.target.value)) }}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={numbers}
            id="numberInput"
            onChange={() => { setNumbers(prev => !prev) }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={symbols}
            id="symbolInput"
            onChange={() => { setSymbols(prev => !prev) }}
          />
          <label htmlFor="symbolInput">Symbols</label>
        </div>
      </div>
    </div>
  );
};

export default App;
