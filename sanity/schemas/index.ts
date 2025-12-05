import { Articles } from "./Articles";
import { Experiences } from "./Experience";
import { FAQ } from "./FAQ";
import { Projects } from "./Projects";
import { Services } from "./Services";
import { Technologies } from "./Technologies";
import { Testimonials } from "./Testimonials";
import { postType } from "./Post";
import newsletter from "./Newsletter";

const schemas = [
  Technologies,
  Services,
  Experiences,
  FAQ,
  Testimonials,
  Projects,
  Articles,
  postType,
  newsletter,
];

export default schemas;
