import React, { useEffect, useState } from 'react';
import { animated, config, useSpring } from '@react-spring/web';
import { useTranslation } from 'react-i18next';
import { TypeAnimation } from 'react-type-animation';

const TypingEffect = () => {
  const { t } = useTranslation();
  const textToType = `${t('banner.wedo')}\n${t('banner.digital')}`;
  const [index, setIndex] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);

  const springProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.slow,
    delay: 0, // Initial delay before animation starts
    onRest: () => {
      // Increase index when animation is complete
      setIndex(prevIndex => (prevIndex + 1) % textToType.length);
    },
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % textToType.length);
    }, 200); // Delay between animation loops

    // Show the animation after the initial delay
    const showTimer = setTimeout(() => {
      setShowAnimation(true);
    }, 100); // Initial delay before showing animation

    return () => {
      clearInterval(timer);
      clearTimeout(showTimer);
    };
  }, [textToType.length]);

  return (
    <div className="typing-animation">
      {showAnimation && (
        <animated.div style={{ ...springProps, whiteSpace: 'pre-line' }}>
          {textToType.slice(0, index + 1)}
          <span className="cursor">|</span>
        </animated.div>
      )}
      

    </div>
  );
};

export default TypingEffect;


