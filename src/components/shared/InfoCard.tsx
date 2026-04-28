const INFO_CARD_ACCENT_SQUARE_BG = {
  "bp-blue": "bg-bp-blue",
  "bp-orange": "bg-bp-orange",
} as const;

export type InfoCardProps = {
  title: string;
  heading: string;
  body: string;
  color: keyof typeof INFO_CARD_ACCENT_SQUARE_BG;
};

function InfoCard({ title, heading, body, color }: InfoCardProps) {
  return (
    <div
      className="flex flex-col gap-6 bg-bp-white rounded-[5px] w-full max-w-[357px] h-[321px] px-7 pt-6 pb-12 
      lg:max-w-[569px] lg:h-[382px] lg:px-12 lg:pt-9 lg:pb-16"
    >
      {/* Gray Tag */}
      <div
        className="bg-bp-lightest-grey text-zinc-800 text-[10px] font-medium uppercase font-['Poppins'] w-fit rounded-[5px] whitespace-nowrap
        flex flex-row items-center gap-2 py-2 px-3"
      >
        <div
          className={`shrink-0 rounded-sm ${INFO_CARD_ACCENT_SQUARE_BG[color]} w-3 h-3`}
          aria-hidden
        />
        <p>{title}</p>
      </div>

      {/* Body Container */}
      <div className="gap-4 flex flex-col flex-1 min-w-[297px]">
        {/* Heading */}
        <p className="font-['Poppins'] text-bp-black text-lg md:text-2xl leading-normal">
          {heading}
        </p>

        {/* Body */}
        <p className="flex font-['Poppins'] text-bp-black text-sm md:text-base leading-normal">
          {body}
        </p>
      </div>
    </div>
  );
}

export default InfoCard;