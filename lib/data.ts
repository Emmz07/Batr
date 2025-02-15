import Image from "next/image";


export type AnimeSceneEntry = {
  src: string;
  offsetX: number;
  offsetY: number;
  rotate: number;
};

export const data: Record<string, AnimeSceneEntry[]> = {
    Electronics: [
    {
      src: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500' as unknown as string,
      offsetX: -460,
      offsetY: -190,
      rotate: -8,
    },
    {
      src: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?w=500' as unknown as string,
      offsetX: -10,
      offsetY: -300,
      rotate: 2,
    },
    {
      src: ' https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?w=500' as unknown as string,
      offsetX: 430,
      offsetY: -100,
      rotate: -4,
    },
  ],
  Furniture: [
    {
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500' as unknown as string,
      offsetX: -500,
      offsetY: -100,
      rotate: 3,
    },
    {
      src: 'https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg' as unknown as string,
      offsetX: -10,
      offsetY: -270,
      rotate: -4,
    },
    {
      src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600' as unknown as string,
      offsetX: 400,
      offsetY: -70,
      rotate: -2,
    },
  ],
  Vehicles: [
    {
      src: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' as unknown as string,
      offsetX: -420,
      offsetY: -110,
      rotate: -5,
    },
    {
      src: 'https://images.pexels.com/photos/712618/pexels-photo-712618.jpeg?auto=compress&cs=tinysrgb&w=600' as unknown as string,
      offsetX: 50,
      offsetY: -200,
      rotate: 4,
    },
    {
      src: 'https://images.pexels.com/photos/240222/pexels-photo-240222.jpeg?auto=compress&cs=tinysrgb&w=600' as unknown as string,
      offsetX: 450,
      offsetY: 20,
      rotate: 10,
    },
  ],
  Accessories: [
    {
      src: 'https://images.pexels.com/photos/313719/pexels-photo-313719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' as unknown as string,
      offsetX: -500,
      offsetY: -10,
      rotate: -5,
    },
    {
      src: 'https://images.pexels.com/photos/380782/pexels-photo-380782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' as unknown as string,
      offsetX: -10,
      offsetY: -100,
      rotate: 3,
    },
    {
      src: 'https://images.pexels.com/photos/1453008/pexels-photo-1453008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' as unknown as string,
      offsetX: 370,
      offsetY: 200,
      rotate: -7,
    },
  ],
  Fashion: [
    {
      src: 'https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' as unknown as string,
      offsetX: -450,
      offsetY: 100,
      rotate: -2,
    },
    {
      src: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' as unknown as string,
      offsetX: -100,
      offsetY: -20,
      rotate: -3,
    },
    {
      src: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' as unknown as string,
      offsetX: 350,
      offsetY: 80,
      rotate: 2,
    },
  ],

  booksAndArticles: [
    {
      src: 'https://images.pexels.com/photos/13589785/pexels-photo-13589785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' as unknown as string,
      offsetX: -450,
      offsetY: -70,
      rotate: -2,
    },
    {
      src: 'https://images.pexels.com/photos/20646144/pexels-photo-20646144/free-photo-of-reading-choices-on-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' as unknown as string,
      offsetX: -80,
      offsetY: 50,
      rotate: -3,
    },
    {
      src: 'https://images.pexels.com/photos/7723397/pexels-photo-7723397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' as unknown as string,
      offsetX: 350,
      offsetY: -70,
      rotate: -13,
    },
  ],

  Services: [
    {
      src: 'https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' as unknown as string,
      offsetX: -450,
      offsetY: 100,
      rotate: -2,
    },
    {
      src: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' as unknown as string,
      offsetX: -100,
      offsetY: -20,
      rotate: -3,
    },
    {
      src: 'https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' as unknown as string,
      offsetX: 350,
      offsetY: 100,
      rotate: 2,
    },
  ],

  Art: [
    {
      src: 'https://images.pexels.com/photos/1212048/pexels-photo-1212048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' as unknown as string,
      offsetX: -450,
      offsetY: 140,
      rotate: -2,
    },
    {
      src: 'https://images.pexels.com/photos/962312/pexels-photo-962312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' as unknown as string,
      offsetX: -100,
      offsetY: 160,
      rotate: -3,
    },
    {
      src: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' as unknown as string,
      offsetX: 350,
      offsetY: 150,
      rotate: 2,
    },
  ],

  Music: [
    {
      src: 'https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' as unknown as string,
      offsetX: -450,
      offsetY: 180,
      rotate: -2,
    },
    {
      src: 'https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' as unknown as string,
      offsetX: -100,
      offsetY: 230,
      rotate: -3,
    },
    {
      src: 'https://images.pexels.com/photos/1762578/pexels-photo-1762578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' as unknown as string,
      offsetX: 350,
      offsetY: 250,
      rotate: 2,
    },
  ],

  Utensils: [
    {
      src: 'https://images.pexels.com/photos/4108723/pexels-photo-4108723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' as unknown as string,
      offsetX: -450,
      offsetY: 240,
      rotate: -2,
    },
    {
      src: 'https://images.pexels.com/photos/6310607/pexels-photo-6310607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' as unknown as string,
      offsetX: -100,
      offsetY: 200,
      rotate: -3,
    },
    {
      src: 'https://images.pexels.com/photos/4906490/pexels-photo-4906490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' as unknown as string,
      offsetX: 350,
      offsetY: 250,
      rotate: 2,
    },
  ],

  Others: [
    {
      src: 'https://images.pexels.com/photos/8801060/pexels-photo-8801060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' as unknown as string,
      offsetX: -450,
      offsetY: 200,
      rotate: -2,
    },
    {
      src: 'https://images.pexels.com/photos/4551310/pexels-photo-4551310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' as unknown as string,
      offsetX: -100,
      offsetY: 270,
      rotate: -3,
    },
    {
      src: 'https://images.pexels.com/photos/9185883/pexels-photo-9185883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' as unknown as string,
      offsetX: 350,
      offsetY: 250,
      rotate: 2,
    },
  ],
};
