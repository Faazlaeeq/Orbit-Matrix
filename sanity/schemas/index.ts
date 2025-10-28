import { Articles } from "./Articles";
import { Experiences } from "./Experience";
import { FAQ } from "./FAQ";
import { Projects } from "./Projects";
import { Services } from "./Services";
import { Technologies } from "./Technologies";
import { Testimonials } from "./Testimonials";
import { postType } from "./Post";

const schemas = [
  Technologies,
  Services,
  Experiences,
  FAQ,
  Testimonials,
  Projects,
  Articles,
  postType
];

export default schemas;
