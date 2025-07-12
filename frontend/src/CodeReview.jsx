import { useState, useEffect } from 'react';
import "prismjs/themes/prism-tomorrow.css";
import Editor from 'react-simple-code-editor';
import prism from 'prismjs';
import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/atom-one-dark.css';
import { toast } from 'react-toastify';
import { API_ENDPOINTS } from './config/api';

function CodeReview() {
  const [code, setCode] = useState("def sum():\n  return a + b\n");
  const [review, setReview] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  const reviewCode = async () => {
    if (!code.trim()) {
      toast.error('Please enter some code to review');
      return;
    }

    setIsLoading(true);
    setReview("");

    try {
      const response = await fetch(API_ENDPOINTS.CODE_REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code })
      });

      const data = await response.json();

      if (response.ok) {
        setReview(data.result);
        toast.success('Code review completed! 🎉');
      } else {
        setReview("⚠️ Error: " + (data.message || 'Failed to get review'));
        toast.error(data.message || 'Failed to get review');
      }
    } catch (error) {
      console.error('Review error:', error);
      setReview("⚠️ Error fetching review. Please try again.");
      toast.error('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setCode(e.target.result);
      reader.readAsText(file);
    }
  };

  const clearCode = () => {
    setCode("");
    setReview("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6">
      {/* Header */}
      <div className="text-center text-4xl font-extrabold mb-10">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          AI Code Reviewer
        </span>
        <div className="text-sm text-gray-400 mt-2">
          Get instant AI-powered code reviews! 🚀
        </div>
      </div>

      {/* Main Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Code Input Section */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-700">
          {/* File Upload */}
          <label className="block text-sm font-medium mb-2 text-gray-400">Upload a Code File</label>
          <input
            type="file"
            accept=".js, .py, .css, .cpp, .cs, .ts, .html, .json, .java"
            onChange={handleFileUpload}
            className="w-full p-2 rounded-lg bg-gray-800 border border-gray-600 text-sm text-gray-300 cursor-pointer mb-4"
          />

          {/* Code Editor */}
          <Editor
            value={code}
            onValueChange={setCode}
            highlight={code => prism.highlight(code, prism.languages.javascript, 'javascript')}
            padding={12}
            style={{
              fontFamily: '"Fira Code", monospace',
              fontSize: 15,
              backgroundColor: '#1e1e2f',
              color: '#f8f8f2',
              borderRadius: '0.5rem',
              minHeight: '300px',
              border: '1px solid #3b3b5a'
            }}
            disabled={isLoading}
          />

          <div className="flex gap-3 mt-6">
            <button
              onClick={reviewCode}
              disabled={isLoading}
              className={`flex-1 py-3 rounded-xl text-white font-bold text-lg shadow-lg transition duration-300 transform hover:scale-105 ${
                isLoading
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-indigo-500'
              }`}
            >
              {isLoading ? '🔄 Reviewing...' : '🔍 Review Code'}
            </button>
            <button
              onClick={clearCode}
              disabled={isLoading}
              className="px-4 py-3 bg-gray-700 hover:bg-gray-600 rounded-xl text-white font-bold transition duration-300"
            >
              🗑️ Clear
            </button>
          </div>
        </div>

        {/* Review Output Section */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-700 overflow-auto max-h-[600px]">
          <h2 className="text-xl font-semibold mb-4 text-purple-300">Review Result</h2>
          <div className="prose prose-invert max-w-none text-gray-300 whitespace-pre-wrap">
            {isLoading ? (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
                <span className="ml-3">Analyzing your code...</span>
              </div>
            ) : (
              <Markdown rehypePlugins={[rehypeHighlight]}>
                {review || "Your code review result will appear here after submission."}
              </Markdown>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodeReview;
