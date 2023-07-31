import React from "react";
import { useEffect, useRef } from "react";

interface props {
  image: string;
  name: string;
  description?: string;
  linkCode?: string;
  linkPreview?: string;
}

const Card = (props: props) => {
  const elementTextRef = useRef<HTMLDivElement | null>(null);
  const elementButtonRef = useRef<HTMLAnchorElement | null>(null);
  const elementTitleRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    const elementText = elementTextRef.current;
    const elementButton = elementButtonRef.current;
  
    if (elementText && elementButton) {
      const heightTxt: number = elementText.clientHeight;
      const heightBtn: number = elementButton.clientHeight;
      console.log(heightTxt, heightBtn);

      elementTitleRef.current?.style.setProperty('inset', `auto auto ${heightTxt + heightBtn + 10}px 30px`);
    }
  }, []);

  return (
    <div>
      <div className="card w-96 h-64 rounded-2xl ">
        <img
          className="projects w-full h-full rounded-2xl"
          src={props.image}
          alt=""
        />

        <h2 ref={elementTitleRef}  id="text" className="TextGrande text-orange-600 font-semibold ">
          {props.name}
        </h2>
        <p ref={elementTextRef} className="text-zinc-500 font-normal text-sm">
          {props.description}
        </p>
        <div  className="button flex gap-3">
          <a
            
            href={props.linkCode}
            target="_blank"
            className="w-auto h-10"
            ref={elementButtonRef}
          >
            <button className="bg-orange-600 w-auto px-7 rounded-xl pb-5 pt-1 font-semibold text-zinc-300 mt-3">
              view code
            </button>
          </a>

          <a
            href={props.linkPreview}
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <button className="bg-orange-600 w-auto px-7 rounded-xl pb-5 pt-1 font-semibold text-zinc-300 mt-3">
              view site
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
