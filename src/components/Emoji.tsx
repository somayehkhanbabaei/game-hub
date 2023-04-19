import bullEye from '../assets/bulls-eye.webp';
import thumbsUp from '../assets/thumbs-up.webp';
import meh from '../assets/meh.webp';
import { Image, ImageProps } from '@chakra-ui/react';

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emogiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: 'meh', boxSize: '25' },
    4: { src: thumbsUp, alt: 'recommended', boxSize: '25' },
    5: { src: bullEye, alt: 'exceptional', boxSize: '35' },
  };
  return <Image {...emogiMap[rating]} marginTop={1} />;
};

export default Emoji;
