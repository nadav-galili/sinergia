// components/BackgroundImages.tsx
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface BackgroundImagesProps {
  images: string[];
  currentImageIndex: number;
  previousImageIndex: number;
  isClient: boolean;
  imagesLoaded: boolean;
}

const fadeInFromTop = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const BackgroundImages: React.FC<BackgroundImagesProps> = ({
  images,
  currentImageIndex,
  previousImageIndex,
  isClient,
  imagesLoaded,
}) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {isClient && imagesLoaded && (
        <AnimatePresence mode="sync">
          {/* Current Image */}
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 h-full">
            <div className="relative h-full w-full">
              <Image
                src={images[currentImageIndex]}
                alt={`Background ${currentImageIndex + 1}`}
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
              <motion.div
                className="absolute inset-0 bg-black/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </div>
          </motion.div>

          {/* Previous Image */}
          <motion.div
            key={`prev-${previousImageIndex}`}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            className="absolute inset-0 h-full">
            <div className="relative h-full w-full">
              <Image
                src={images[previousImageIndex]}
                alt={`Background Previous ${previousImageIndex + 1}`}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default BackgroundImages;
