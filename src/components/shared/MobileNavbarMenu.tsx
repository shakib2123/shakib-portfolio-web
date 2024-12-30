import { useSound } from "@/context/sound.context";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { IoCloseSharp, IoMenu } from "react-icons/io5";
import logo from "@/assets/s-logo.png";
import { montserrat } from "@/fonts";

export default function MobileNavbarMenu() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { isMuted } = useSound();

  const playClickSound = () => {
    if (!isMuted) {
      const audio = new Audio("/audio/button-click-sound.mp3");
      audio.play();
    }
  };

  const playLinkSound = () => {
    if (!isMuted) {
      const audio = new Audio("/audio/link-hover-and-click.wav");
      audio.play();
    }
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={() => {
          onOpen();
          playClickSound();
        }}
        className="bg-gradient-1 text-primary text-2xl shadow-custom-shadow-1 rounded-full p-3"
      >
        <IoMenu />
      </button>
      <Drawer
        isOpen={isOpen}
        placement={"left"}
        backdrop="blur"
        size={"xs"}
        onOpenChange={onOpenChange}
        classNames={{ closeButton: "hidden" }}
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex justify-between items-center border-b border-gray-700">
                <Link
                  href={"/"}
                  onClick={() => {
                    onClose();
                    playClickSound();
                  }}
                  className="flex items-center gap-1"
                >
                  <Image
                    src={logo}
                    alt="logo"
                    width={100}
                    height={100}
                    className="w-6"
                  />
                  <h1 className={`text-xl font-semibold`}>SHAKIB</h1>
                </Link>
                <button
                  onClick={() => {
                    onClose();
                    playClickSound();
                  }}
                  className="bg-gradient-1 text-primary text-2xl shadow-custom-shadow-1 rounded-full p-3"
                >
                  <IoCloseSharp />
                </button>
              </DrawerHeader>
              <DrawerBody>
                <Link
                  href={"/#home"}
                  onClick={() => {
                    onClose();
                    playLinkSound();
                  }}
                  className={`py-1 ${montserrat.className}`}
                >
                  HOME
                </Link>
                <Link
                  href={`/#skills`}
                  onClick={() => {
                    onClose();
                    playLinkSound();
                  }}
                  className={`py-1 ${montserrat.className}`}
                >
                  SKILLS
                </Link>
                <Link
                  href={`/#projects`}
                  onClick={() => {
                    onClose();
                    playLinkSound();
                  }}
                  className={`py-1 ${montserrat.className}`}
                >
                  PROJECTS
                </Link>
                <Link
                  href={`/#blog`}
                  onClick={() => {
                    onClose();
                    playLinkSound();
                  }}
                  className={`py-1 ${montserrat.className}`}
                >
                  BLOG
                </Link>
                <Link
                  href={`/#contact`}
                  onClick={() => {
                    onClose();
                    playLinkSound();
                  }}
                  className={`py-1 ${montserrat.className}`}
                >
                  CONTACT
                </Link>
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  );
}
