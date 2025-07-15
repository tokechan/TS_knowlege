"use client";

import { useState } from "react";
import { fetchImage } from "./fetch-image";
import Image from "next/image";
import styles from "./page.module.css";

type CatImageProps = {
  url: string;
};


export function CatImage({  url }: CatImageProps) {
  const [imageUrl, setImageUrl] = useState(url);

  const refreshImage = async () => {
    setImageUrl(""); 
    const image = await fetchImage();
    setImageUrl(image.url);
  };

  return (
    <div className={styles.catImageContainer}>
      <button onClick={refreshImage} className={styles.button}>他のにゃんころも見る</button>
      <div className={styles.frame}>
        {imageUrl && <Image src={imageUrl} className={styles.image} alt="猫画像" width={500} height={500} />}
      </div>
    </div>
  );
} 