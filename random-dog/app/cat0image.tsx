import Image from "next/image";

type CatImageProps = {
  url: string;
};


export function CatImage({  url }: CatImageProps) {
  return (
    <div>
      <Image src={url} alt="猫画像" width={500} height={ 500} />
    </div>
  );
}