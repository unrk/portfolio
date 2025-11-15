export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Maison WAQT",
    description: "Photoshoot for a watch brand.",
    longDescription:
      "Maison WAQT is an automatic watch brand that booked me to handle their professional photography. I shot with a Canon 1300D and an 18-55mm lens.",
    image: "/projects/WAQT-3999.jpg",
    images: [
      "/projects/WAQT--2.jpg",
      "/projects/WAQT--3.jpg",
      "/projects/WAQT--4.jpg",
      "/projects/WAQT--5.jpg",
      "/projects/WAQT--6.jpg",
      "/projects/WAQT--7.jpg",
      "/projects/WAQT-.jpg",
      "/projects/WAQT-2.jpg",
      "/projects/WAQT-3996.jpg",
      "/projects/WAQT-3997.jpg",
      "/projects/WAQT-3999.jpg",
      "/projects/WAQT-4002.jpg",
      "/projects/WAQT-4005.jpg",
      "/projects/WAQT-4006.jpg",
      "/projects/WAQT-4012.jpg",
      "/projects/WAQT-4013-2.jpg",
      "/projects/WAQT-4013.jpg",
      "/projects/WAQT-4015.jpg",
      "/projects/WAQT-4018.jpg",
      "/projects/WAQT-4025.jpg",
      "/projects/WAQT-4028.jpg",
      "/projects/WAQT-4030.jpg",
      "/projects/WAQT-4034.jpg",
      "/projects/WAQT-4036.jpg",
      "/projects/WAQT-4044.jpg",
      "/projects/WAQT-4048.jpg",
      "/projects/WAQT-4051.jpg",
      "/projects/WAQT-4052.jpg",
      "/projects/WAQT-4054.jpg",
    ],
  },
];
