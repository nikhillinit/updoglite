
import React, { useState } from 'react';

function App() {
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    const res = await fetch('/forecast', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        stage_allocations: { "Pre-Seed": 43, "Seed": 43, "Series A": 14 }
      }),
    });

    const data = await res.json();
    setResponse(JSON.stringify(data));
  };

  return (
    <div>
      <h1>FundFlow Lite</h1>
      <button onClick={handleSubmit}>Run Forecast</button>
      <pre>{response}</pre>
    </div>
  );
}

export default App;
