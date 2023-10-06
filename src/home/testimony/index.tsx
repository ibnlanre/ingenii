import comments from "../../data/comments.json";
import { Comment } from "./comment";

export function Testimony() {
  return (
    <section id="testimonials" className="flex flex-col gap-20 pt-16 pb-20 text-white bg-begonia">
      <div className="flex flex-col max-w-screen-xl gap-7 px-2 mx-auto clump:px-[clamp(8px,5vw,5rem)]">
        <h2 className="text-5xl clump:text-[clamp(2.05rem,4vw,3.75rem)] font-bold">
          Testimony
        </h2>
        <div className="flex flex-wrap gap-12 clump:gap-[clamp(2rem,3vw,3rem)]">
          {comments.map((props) => (
            <Comment key={props.person} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
