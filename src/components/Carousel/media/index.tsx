import media1 from './media-1.png';
import media2 from './media-2.png';
import media3 from './media-3.png';
import media4 from './media-4.png';
// import media5 from './media-5.jpeg';

export const media = [media1, media2, media3, media4];
export const mediaByIndex = (index: number) => media[index % media.length];
