import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

const navItems = ["Nexus", "Valut", "Prologue", "About", "Contact"];

const Navbar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [lastScrollY,setLastScrollY] = useState(0);
  const [isNavVisiable,setIsNavVisiable] = useState(true);
  const navContainerRef = useRef(null);
  const audioElementRef = useRef(null);
  
  const {y : currentScrollY}=useWindowScroll();
  useEffect(() => {
    const navElement = navContainerRef.current;

    if (currentScrollY === 0) {
      setIsNavVisiable(true);
      navElement.style.backgroundColor = "transparent";
      navElement.style.border = "none";
      navElement.style.borderRadius = "0";
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisiable(false);
      navElement.style.backgroundColor = "black";
      navElement.style.padding = "30px";
      navElement.style.width = "90%";
      navElement.style.border = "1px solid black";
      navElement.style.borderRadius = "0.5rem";
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisiable(true);
      navElement.style.backgroundColor = "black";
      navElement.style.padding = "30px";
      navElement.style.width = "90%";
      navElement.style.border = "1px solid black";
      navElement.style.borderRadius = "0.5rem";
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY]);
  

  useEffect(()=>{
    gsap.to(navContainerRef,{
      y: isNavVisiable ? 0 : -100,
      opacity:isNavVisiable ? 1 : 0,
      duration:0.2,
    })
  },[isNavVisiable])

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-10 z-50 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex items-center justify-between w-full p-4">
          <div className="flex items-center gap-7">
            <img src="/img/logo.png" alt="logo" className="w-10" />
            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50  md:flex hidden items-center justify-center gap-1"
            />
          </div>
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems?.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn"
                >
                  {item}
                </a>
              ))}
            </div>
            <button
              className="ml-10 flex item-center space-x-0.5"
              onClick={toggleAudioIndicator}
            >
              <audio ref={audioElementRef} src="/audio/loop.mp3" loop />
              {/* Fix the map function by returning the JSX */}
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={`indicator-line ${
                    isIndicatorActive ? "active" : ""
                  }`}
                  style={{ animationDelay: `${bar * 0.1}s` }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
