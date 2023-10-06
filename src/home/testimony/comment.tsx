import Image from "next/image";

interface CommentProps {
  comment: string;
  logo: string;
  company: string;
  person: string;
  position: string;
}

export function Comment(props: CommentProps) {
  return (
    <article className="flex flex-col flex-1 gap-8 clump:gap-[clamp(1rem,2vw,2rem)] text-2xl clump:text-[clamp(1rem,2vw,1.5rem)] basis-64 leading-normal">
      <p>{props.comment}</p>
      <div className="flex gap-2.5 items-center">
        <figure className="relative flex-shrink-0 w-20 clump:w-[clamp(3rem,6vw,5rem)] h-20 clump:h-[clamp(3rem,6vw,5rem)] bg-white rounded-full aspect-square">
          <Image
            className="object-contain"
            alt={`${props.company} logo`}
            src={props.logo}
            fill
          />
        </figure>
        <dl className="flex flex-col gap-0.5">
          <dt className="text-black">{props.person}</dt>
          <dd className="italic">{props.position}</dd>
        </dl>
      </div>
    </article>
  );
}
