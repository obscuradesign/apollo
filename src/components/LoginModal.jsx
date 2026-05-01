import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MOCK_STUDENTS from '../data/mockStudents.json';
import '../App.css';

export function LoginModal({ onClose, onLogin }) {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const student = MOCK_STUDENTS[studentId];
    if (student && student.password === password) {
      onLogin({ id: studentId, ...student });
      onClose();
    } else {
      setError('Invalid Student ID or password.');
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div 
        className="modal-content login-modal"
        onClick={e => e.stopPropagation()}
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <div className="login-header">
          <h2 style={{margin: 0, color: '#1e3a8a'}}>Corsair Connect</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="error-message">{error}</div>}
          
          <div className="form-group">
            <label htmlFor="studentId">Student ID</label>
            <input 
              type="text" 
              id="studentId" 
              placeholder="e.g. 123456"
              value={studentId}
              onChange={e => setStudentId(e.target.value)}
              autoFocus
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          
          <div className="form-info">
            <p style={{fontSize: '0.8rem', color: '#6b7280'}}>For demo purposes, use ID: 123456, Pass: smc</p>
          </div>
          
          <button type="submit" className="login-submit-btn">Login</button>
        </form>
      </motion.div>
    </div>
  );
}
