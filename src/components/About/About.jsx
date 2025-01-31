import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Header from '../Header/Header';
import './About.css';

// Enhanced Custom Icons
const socialLinks = [
  { 
    name: 'LinkedIn', 
    link: 'https://www.linkedin.com/in/ismail-sayed', 
    icon: <i className="fab fa-linkedin"></i> 
  },
  { 
    name: 'GitHub', 
    link: 'https://github.com/esmail-sayed', 
    icon: <i className="fab fa-github"></i> 
  },
  { 
    name: 'Twitter', 
    link: 'https://twitter.com/esmail_sayed', 
    icon: <i className="fab fa-twitter"></i> 
  }
];

const skills = [
  {
    name: 'React.js',
    level: 90,
    color: '#61DAFB',
    description: 'تطوير واجهات مستخدم تفاعلية وديناميكية'
  },
  {
    name: 'Node.js',
    level: 85,
    color: '#68A063',
    description: 'بناء خوادم وواجهات برمجة قوية'
  },
  {
    name: 'TypeScript',
    level: 80,
    color: '#007ACC',
    description: 'تطوير تطبيقات معززة بالتنميط'
  },
  {
    name: 'Docker',
    level: 75,
    color: '#0DB7ED',
    description: 'إدارة وتوزيع التطبيقات'
  },
  {
    name: 'GraphQL',
    level: 70,
    color: '#E535AB',
    description: 'تصميم واستعلام APIs متقدمة'
  },
  {
    name: 'Cloud Computing',
    level: 65,
    color: '#FF9900',
    description: 'استضافة وإدارة الخدمات السحابية'
  }
];

const achievements = [
  {
    title: 'مطور Full Stack',
    description: 'خبرة متكاملة في تطوير الواجهات الأمامية والخلفية',
    icon: <i className="fas fa-code"></i>
  },
  {
    title: 'مهندس برمجيات',
    description: 'مؤهل في تصميم وهندسة الحلول البرمجية المعقدة',
    icon: <i className="fas fa-laptop-code"></i>
  },
  {
    title: 'مستشار تقني',
    description: 'خبرة في تقديم استشارات تقنية للمشاريع المتنوعة',
    icon: <i className="fas fa-chart-line"></i>
  }
];

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <motion.div 
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="about-page"
    >
      <Header />
      <div className="about-container">
        <div className="profile-section">
          <div className="profile-image-wrapper">
            <motion.img 
              src="/assets/images/logo.png" 
              alt="اسماعيل سيد اسماعيل" 
              className="profile-image"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="image-border"></div>
          </div>
          
          <motion.div 
            className="profile-info"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h1>إسماعيل سيد اسماعيل</h1>
            <h2>مطور برمجيات | مطور Full Stack</h2>
            <p>
              مطور برمجيات شغوف ومبدع، متخصص في تطوير حلول تقنية متكاملة 
              باستخدام أحدث التقنولوجيا. لدي شغف كبير بابتكار تطبيقات 
              وحلول برمجية فعالة وعالية الجودة.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={index} 
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="tabs-section">
          <div className="tab-headers">
            {['skills', 'achievements'].map((tab) => (
              <button
                key={tab}
                className={`tab-header ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'skills' ? 'المهارات التقنية' : 'الإنجازات'}
              </button>
            ))}
          </div>

          <div className="tab-content">
            {activeTab === 'skills' ? (
              <motion.div 
                className="skills-section"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-info">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div 
                          className="skill-progress" 
                          style={{ 
                            width: `${skill.level}%`, 
                            backgroundColor: skill.color 
                          }}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                      <p className="skill-description">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div 
                className="achievements-section"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="achievements-grid">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="achievement-card">
                      <div className="achievement-icon">{achievement.icon}</div>
                      <h3>{achievement.title}</h3>
                      <p>{achievement.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;