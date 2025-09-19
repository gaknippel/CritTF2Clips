import './AboutPage.css';
import SplitText from '../ReactBitsStuff/SplitText';
import GradientText from '../ReactBitsStuff/GradientText';
import ScrollReveal from '../ReactBitsStuff/ScrollReveal';
import type { DownloadCloud } from 'lucide-react';


const AboutPage = () => {
  return (
    <div>
      
      <SplitText className='about-welcome'
        text="About"
        delay={15}
      />


      <ScrollReveal containerClassName='about-body1'
        baseOpacity={0}
        enableBlur={true}
        baseRotation={2}
        blurStrength={10}
        wordAnimationEnd='bottom bottom'
        
      >
        When does a man die? When he is hit by a bullet? No! When he suffers a disease?
        No! When he ate a soup made out of a poisonous mushroom?
        No! A man dies when he is forgotten!
        
      </ScrollReveal>

      
    </div>
  );
};

export default AboutPage;
