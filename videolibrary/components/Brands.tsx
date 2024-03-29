import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function Brands() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.2,
          },
        },
      }}
      className="flex flex-col md:flex-row justify-center items-center mt-10 gap-6 px-8 max-w-[1400px] mx-auto"
    >
      <div className="brand group">
        <Image src="/images/disnep.png" layout="fill" objectFit="cover" />
        <Link href="/disnep">
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/disney.mp4" type="video/mp4" />
          </video>
        </Link>
      </div>
      <div className="brand group">
        <Image src="/images/pixar.png" layout="fill" objectFit="cover" />
        <Link href="/pixar">
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/pixar.mp4" type="video/mp4" />
          </video>
        </Link>
      </div>

      <div className="brand group">
        <Image src="/images/marvel.png" layout="fill" objectFit="cover" />
        <Link href="/marvel">
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/marvel.mp4" type="video/mp4" />
          </video>
        </Link>
      </div>

      <div className="brand group">
        <Image src="/images/starwars.png" layout="fill" objectFit="cover" />
        <Link href="/starwars">
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/star-wars.mp4" type="video/mp4" />
          </video>
        </Link>
      </div>

      <div className="brand group">
        <Image
          src="/images/national-geographic.png"
          layout="fill"
          objectFit="cover"
        />
        <Link href="/natGeo">
          <video
            autoPlay
            loop
            playsInline
            className="hidden group-hover:inline rounded-lg object-cover"
          >
            <source src="/videos/national-geographic.mp4" type="video/mp4" />
          </video>
        </Link>
      </div>
    </motion.section>
  );
}

export default Brands;
