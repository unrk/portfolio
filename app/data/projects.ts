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
    image: "/projects/proj_1/WAQT-3999.jpg",
    images: [
      "/projects/proj_1/WAQT--2.jpg",
      "/projects/proj_1/WAQT--3.jpg",
      "/projects/proj_1/WAQT--4.jpg",
      "/projects/proj_1/WAQT--5.jpg",
      "/projects/proj_1/WAQT--6.jpg",
      "/projects/proj_1/WAQT--7.jpg",
      "/projects/proj_1/WAQT-.jpg",
      "/projects/proj_1/WAQT-2.jpg",
      "/projects/proj_1/WAQT-3996.jpg",
      "/projects/proj_1/WAQT-3997.jpg",
      "/projects/proj_1/WAQT-3999.jpg",
      "/projects/proj_1/WAQT-4002.jpg",
      "/projects/proj_1/WAQT-4005.jpg",
      "/projects/proj_1/WAQT-4006.jpg",
      "/projects/proj_1/WAQT-4012.jpg",
      "/projects/proj_1/WAQT-4013-2.jpg",
      "/projects/proj_1/WAQT-4013.jpg",
      "/projects/proj_1/WAQT-4015.jpg",
      "/projects/proj_1/WAQT-4018.jpg",
      "/projects/proj_1/WAQT-4025.jpg",
      "/projects/proj_1/WAQT-4028.jpg",
      "/projects/proj_1/WAQT-4030.jpg",
      "/projects/proj_1/WAQT-4034.jpg",
      "/projects/proj_1/WAQT-4036.jpg",
      "/projects/proj_1/WAQT-4044.jpg",
      "/projects/proj_1/WAQT-4048.jpg",
      "/projects/proj_1/WAQT-4051.jpg",
      "/projects/proj_1/WAQT-4052.jpg",
      "/projects/proj_1/WAQT-4054.jpg",
    ],
  },
  {
    id: 2,
    title: "SupChess",
    description: "Chess club poster",
    longDescription:
      "SupChess is the chess club that I created within my school, I needed to make posters to do some promotion.",
    image: "/projects/proj_2/AFFICHE_THERMAL_COLORS.png",
    images: [
        "/projects/proj_2/AFFICHE_2_BLACK.png",
        "/projects/proj_2/AFFICHE_2_WHITE.png",
        "/projects/proj_2/AFFICHE_THERMAL_COLORS.png"
    ],
  },
];
