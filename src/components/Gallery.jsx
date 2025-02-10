import Card from './GalleryCard';

export default function Gallery() {
  return (
    <div className="gallery">
      <Card
        imgUri="/images/galaxy.webp"
        altText="an AI generated galaxy"
        caption="A Galaxy"
        citation="Microsoft Copilot"
        color="#7086ff"
      />
      <Card
        imgUri="/images/asteroid.webp"
        altText="an AI generated asteroid"
        caption="An Asteroid"
        citation="Microsoft Copilot"
        color="#a8a9aa"
      />
      <Card
        imgUri="/images/black-hole.webp"
        altText="an AI generated black hole"
        caption="A Black Hole"
        citation="Microsoft Copilot"
        color="#e58c43"
      />
      <Card
        imgUri="/images/cloud-nebulae.webp"
        altText="an AI generated cloud nebulae"
        caption="Cloud Nebulae"
        citation="Microsoft Copilot"
        color="#9ad2ea"
      />
      <Card
        imgUri="/images/distant-space.webp"
        altText="an AI generated distant space"
        caption="Distant Space"
        citation="Microsoft Copilot"
        color="#5a5a5a"
      />
      <Card
        imgUri="/images/galaxy-collision.webp"
        altText="an AI generated galaxy collision"
        caption="Galaxy Collision"
        citation="Microsoft Copilot"
        color="#ff69b4"
      />
      <Card
        imgUri="/images/moon.webp"
        altText="an AI generated moon"
        caption="The Moon"
        citation="Microsoft Copilot"
        color="#c0c0c0"
      />
      <Card
        imgUri="/images/pulsar.webp"
        altText="an AI generated pulsar"
        caption="A Pulsar"
        citation="Microsoft Copilot"
        color="#d9b5ea"
      />
      <Card
        imgUri="/images/star-death.webp"
        altText="an AI generated star death"
        caption="Star Death"
        citation="Microsoft Copilot"
        color="#ff4500"
      />
      <Card
        imgUri="/images/sun.webp"
        altText="an AI generated sun"
        caption="The Sun"
        citation="Microsoft Copilot"
        color="#ffa500"
      />
    </div>
  );
}
