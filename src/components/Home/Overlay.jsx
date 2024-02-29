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
    <div className='absolute z-30 top-[650px] left-[90px]'>
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
                  style={{ cursor: 'url("/images/CustomMouses/pointer.png"), pointer', backgroundColor:'rgb(26, 162, 125)' }}
                    onClick={play}
                   className='text-white  bg font-medium rounded-lg  text-4xl px-20 py-3.5 text-center mr-5 mb-5 w-full'
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
