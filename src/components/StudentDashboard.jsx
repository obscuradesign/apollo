import React from 'react';
import { motion } from 'framer-motion';

export function StudentDashboard({ currentUser, onLoginClick, onLogoutClick, onNavigate, currentDay }) {
  // Filter courses for the current day being simulated
  const todaysCourses = currentUser 
    ? currentUser.enrolledCourses.filter(course => course.day === currentDay)
    : [];

  return (
    <div className="dashboard-widget">
      {!currentUser ? (
        <div className="dashboard-logged-out">
          <p>Login to Corsair Connect to view your classes</p>
          <button onClick={onLoginClick} className="login-trigger-btn">
            Corsair Connect Login
          </button>
        </div>
      ) : (
        <div className="dashboard-logged-in">
          <div className="dashboard-header-inner">
            <h3 style={{margin: 0}}>Welcome back, {currentUser.firstName}</h3>
            <button onClick={onLogoutClick} className="logout-btn">Logout</button>
          </div>
          
          <div className="courses-list">
            <h4 style={{marginTop: '12px', marginBottom: '8px', color: '#4b5563'}}>Your Schedule for {currentDay}</h4>
            {todaysCourses.length === 0 ? (
              <p className="no-courses">No classes scheduled for today.</p>
            ) : (
              <div className="course-cards">
                {todaysCourses.map((course, idx) => (
                  <motion.div 
                    key={idx}
                    className="course-card"
                    onClick={() => onNavigate(course.roomId, course.start)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="course-time">{course.start} - {course.end}</div>
                    <div className="course-title">{course.title}</div>
                    <div className="course-room">Room: {course.roomId.replace(/^(room-|drschr-|hss-|sci-|bus-|ssc-)/i, '').toUpperCase()}</div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
