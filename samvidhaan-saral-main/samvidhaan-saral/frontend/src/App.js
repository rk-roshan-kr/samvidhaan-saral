// frontend/src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSimplifyClick = async () => {
    if (!inputText) {
      setError("Please enter some text to analyze.");
      return;
    }
    setIsLoading(true);
    setAnalysisResult(null);
    setError('');

    try {
      const response = await fetch('http://127.0.0.1:5000/api/simplify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Server returned a non-JSON error' }));
        throw new Error(errorData.error || 'Network response was not ok');
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setAnalysisResult(data);

    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.message || 'Failed to fetch analysis. Please check the backend server and console for details.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Samvidhaan Saral</h1>
        <p>Enter a legal text below to get a detailed, simplified explanation.</p>

        <textarea
          className="text-area"
          rows="10"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Paste a legal text here..."
        />

        <button onClick={handleSimplifyClick} disabled={isLoading}>
          {isLoading ? 'Analyzing...' : 'Analyze Text'}
        </button>

        {error && <p className="error-message">{error}</p>}

        {analysisResult && (
          <div className="result-box">
            <h3>Simplified Explanation</h3>
            <p>{analysisResult.simplifiedText}</p>

            <hr />

            <h3>Key Points</h3>
            <ul>
              {analysisResult.keyPoints && analysisResult.keyPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>

            <hr />

            <h3>Legal References</h3>
            {analysisResult.legalReferences && analysisResult.legalReferences.length > 0 ? (
              <ul>
                {analysisResult.legalReferences.map((reference, index) => (
                  <li key={index}>{reference}</li>
                ))}
              </ul>
            ) : <p>No legal references were identified.</p>}

            <hr />

            <h3>Defined Terms</h3>
            {analysisResult.definedTerms && Object.keys(analysisResult.definedTerms).length > 0 ? (
              <dl>
                {Object.entries(analysisResult.definedTerms).map(([term, definition]) => (
                  <React.Fragment key={term}>
                    <dt><strong>{term}</strong></dt>
                    <dd>{definition}</dd>
                  </React.Fragment>
                ))}
              </dl>
            ) : <p>No complex terms were identified.</p>}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;

