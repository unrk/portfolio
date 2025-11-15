import GlareHover from "@/components/GlareHover";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  onClick: () => void;
}

export default function ProjectCard({
  title,
  description,
  image,
  onClick,
}: ProjectCardProps) {
  return (
    <GlareHover
      width="100%"
      height="100%"
      background="transparent"
      borderRadius="0.75rem"
      borderColor="transparent"
      glareColor="#ffffff"
      glareOpacity={0.4}
      glareSize={200}
      transitionDuration={600}
      className="cursor-pointer"
    >
      <div
        onClick={onClick}
        className="group relative h-full overflow-hidden rounded-xl border border-white/8 bg-white/0 shadow-lg backdrop-blur-xl transition-colors duration-300 hover:border-white/25 hover:bg-white/20"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"
        />
        <div className="relative z-10 aspect-video w-full overflow-hidden rounded-b-none bg-transparent">
          <img src={image} alt={title} className="h-full w-full object-cover" />
        </div>
        <div className="relative z-10 p-6">
          <h3 className="mb-2 text-xl font-semibold text-zinc-50">{title}</h3>
          <p className="text-sm text-zinc-300">{description}</p>
        </div>
      </div>
    </GlareHover>
  );
}
