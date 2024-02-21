import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import useSound from 'use-sound';

export function Overlay() {
  const transition = { type: 'spring', duration: 0.8 };
  const soundUrl = '/sound_effects/ButtonPush.mp3';
  const [play] = useSound(soundUrl);
  const config = {
    initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
    animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
    exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } }
  };

  return (
    <div className='absolute' style={{ top: 650, left: 30 }}>
      <motion.header initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={transition}>
      </motion.header>
      <AnimatePresence>
        {(
          <motion.section key="main" {...config} className='pl-16 xl:pl-16 lg:pl-16 sm:pl-0 ssm:pl-0 md:pl-0'>
            <div className="section--container">
              <div className="support--content">
                <motion.div
                  key="p"
                  initial={{ x: -700, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{
                    type: 'spring',
                    damping: 7,
                    stiffness: 30,
                    restDelta: 0.001,
                    duration: 0.8,
                    delay: 0.2,
                    delayChildren: 0.2
                  }}
                >
                  <p className=' text-8xl pb-5 '>
                    WELCOME
                  </p>
                  <Link to={"/roomchapterone"}>
                  <button
                    onClick={play}
                   className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg  text-4xl px-20 py-3.5 text-center mr-5 mb-5 w-full'
                  >
                    START
                  </button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
