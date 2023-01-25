/* eslint-disable-next-line */
export interface BannerProps {
  text: string;
}

export function Banner(props: BannerProps) {
  return <header role="banner">{props.text}</header>;
}

export default Banner;
