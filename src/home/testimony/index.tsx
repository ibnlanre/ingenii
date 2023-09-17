import comments from "../../data/comments.json";
import { Comment } from "./comment";

export function Testimony() {
  return (
    <section className="flex flex-col gap-20 pt-16 pb-20 text-white bg-begonia">
      <div className="flex flex-col max-w-screen-xl gap-7 px-2 mx-auto clump:px-[clamp(8px,5vw,5rem)]">
        <h2 className="text-5xl font-bold">Testimony</h2>
        <div className="flex flex-wrap gap-12">
          {comments.map((props) => (
            <Comment key={props.person} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
