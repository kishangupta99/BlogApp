import React from 'react';
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext';
import { useRef } from 'react';
// Import framer-motion for animations
import { motion } from 'framer-motion';

function Header() {
  const { setInput, input } = useAppContext();
  const inputRef = useRef();

  const onsubmitHandler = async (e) => {
    e.preventDefault();
    // Check if ref has a value before setting
    if (inputRef.current.value.trim() !== '') {
      setInput(inputRef.current.value);
    }
  };

  const onClear = () => {
    setInput('');
    inputRef.current.value = '';
  };

  // Animation variants for staggering children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Adds a small delay between each child animating in
      },
    },
  };

  // Animation for individual items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative overflow-hidden'>
      {/* Container for animations */}
      <motion.div
        className='text-center mt-28 sm:mt-32 mb-12'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <motion.div variants={itemVariants}>
          <motion.div
            // Pulse animation for the "New" badge
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className='inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-6 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary'
          >
            <p>New: AI feature integrated</p>
            <img src={assets.star_icon} className='w-7' alt='' />
          </motion.div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className='text-4xl sm:text-7xl font-bold sm:leading-tight text-gray-800'
        >
          Unleash Your Voice. Your Story.
          <br /> Your{' '}
          <span className='bg-gradient-to-r from-primary via-indigo-500 to-purple-600 bg-clip-text text-transparent'>
            Blogging
          </span>{' '}
          Platform
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className='my-8 sm:my-10 max-w-3xl m-auto text-sm sm:text-base text-purple-900 leading-relaxed'
        >
          This is your canvas to paint with words, your stage to share what
          matters, and your sanctuary to write without filters. Whether it's a
          fleeting thought or a thousand-word epic, your unique story begins
          right here. Explore ideas, connect with readers, and build your digital
          legacy.
        </motion.p>

        <motion.form
          variants={itemVariants}
          onSubmit={onsubmitHandler}
          className='flex justify-between max-w-lg max-sm:scale-90 mx-auto border border-gray-200 bg-white rounded-lg overflow-hidden shadow-lg shadow-gray-100 focus-within:ring-2 focus-within:ring-primary/60 transition-all'
        >
          <input
            ref={inputRef}
            type='text'
            placeholder='Search for blogs, topics, or authors...'
            required
            className='w-full pl-5 pr-2 py-1 outline-none text-gray-700 placeholder-gray-500'
          />
          <button
            type='submit'
            className='bg-gradient-to-r from-primary to-purple-600 text-white px-8 py-3 m-1.5 rounded-md hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer font-medium'
          >
            Search
          </button>
        </motion.form>

        <motion.div variants={itemVariants} className='text-center mt-4 h-6'>
          {input && (
            <button
              onClick={onClear}
              className='border border-gray-500 bg-white text-red-500 font-light text-sm py-1.5 px-4 rounded-full shadow-custom-sm cursor-pointer hover:bg-gray-50 transition-colors'
            >
              Clear Search: "{input}" &times;
            </button>
          )}
        </motion.div>
      </motion.div>

      {/* Softer, more subtle background gradient */}
      <img
        src={assets.gradientBackground}
        alt=''
        className='absolute -top-1/4 -right-1/4 -z-10 opacity-20 blur-3xl w-full'
      />
    </div>
  );
}

export default Header;