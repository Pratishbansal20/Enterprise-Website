// Looks up real shop photos dropped into src/assets/photos/ by file name
// (without extension). Pages use `showPhoto` to decide whether to render a
// photo slot at all: on the live site a slot only appears once its photo
// exists; in `npm run dev` every slot shows, labelled, as a to-do.
import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('/src/assets/photos/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true,
});

export const findPhoto = (name: string) =>
  Object.entries(files).find(([p]) => p.split('/').pop()!.replace(/\.[^.]+$/, '') === name)?.[1].default;

export const showPhoto = (name: string) => import.meta.env.DEV || Boolean(findPhoto(name));
