import React from "react";
import Application from "../application";
import { useMainStore } from "../../store/MainStore";
import { slugs } from "../../utils/types";

const About = () => {
  const { allApplications } = useMainStore()!;
  const currentId = allApplications.findIndex((obj) => obj.slug == slugs.ABOUT);

  return (
    <Application currentId={currentId}>
      About me Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Suscipit iusto commodi sequi! Aperiam eligendi ullam maiores totam odit.
      Itaque voluptatem labore nemo vel nisi quas recusandae? Aspernatur libero
      sint explicabo. asdf hello Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Esse quibusdam dolorum eligendi iure eius quaerat!
      Cupiditate perferendis deleniti a nisi tenetur natus repellat officiis
      distinctio modi, excepturi rem, cumque qui accusantium eos voluptatem
      dicta at explicabo totam? Voluptates cum, expedita enim veniam ea eligendi
      quis dicta, laboriosam impedit odit voluptatum maiores iure? Deleniti
      voluptate facilis deserunt accusamus, ratione quaerat provident odit
      eligendi dignissimos, commodi aspernatur hic aut minima laudantium, magni
      perspiciatis incidunt inventore aliquam. Nesciunt numquam modi adipisci
      natus repellat sapiente deserunt at et, voluptatibus magni soluta amet
      enim quis ad? Minus, animi ab. Asperiores reiciendis hic aut obcaecati
      necessitatibus consequatur unde nemo repellat. Fuga, omnis delectus? Fugit
      harum, voluptas libero consequatur est, fugiat inventore molestiae ducimus
      obcaecati corrupti sunt culpa labore error ratione nostrum. Minus cum
      consequuntur, ipsum voluptatem blanditiis enim sequi ut officia quia!
      Adipisci blanditiis nemo repudiandae deleniti illum minus ad mollitia
      accusantium necessitatibus libero quam vel sapiente quisquam sint atque,
      voluptatem repellendus nam nostrum dicta aliquid quasi earum rem! Officiis
      reiciendis quae expedita deleniti magnam, nihil quo non numquam voluptate
      ex delectus dolorem amet, accusantium ad voluptatem fugiat. Quos nostrum
      earum doloribus placeat voluptatum quia porro doloremque quaerat
      praesentium unde a obcaecati sunt, consequuntur vero necessitatibus!
    </Application>
  );
};

export default About;
