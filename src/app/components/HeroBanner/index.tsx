import "./HeroBanner.scss";

interface Props {
  imageUrl: string;
}

export function HeroBanner(props: Props) {
  const getImageSrcset = () => {
    return "";
  };

  return (
    <div className="HeroBanner">
      <img alt="iamge" src={props.imageUrl} srcSet={getImageSrcset()} />
    </div>
  );
}
