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
    <article className="flex flex-col flex-1 gap-8 text-2xl basis-64">
      <p>{props.comment}</p>
      <div className="flex gap-2.5 items-center">
        <figure className="relative flex-shrink-0 w-20 h-20 bg-white rounded-full aspect-square">
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
