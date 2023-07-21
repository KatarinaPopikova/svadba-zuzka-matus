import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";
import "aos/dist/aos.css";
import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faRectangleList,
  faTree,
  faPersonHiking,
  faUtensils,
  faHandHoldingHeart,
  faAddressBook,
  faSquareCheck,
  faIcons,
  faCar,
  faMapLocationDot,
  faRing,
  faStar,
  faUpRightFromSquare,
  faImages,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faRectangleList,
  faTree,
  faPersonHiking,
  faUtensils,
  faHandHoldingHeart,
  faAddressBook,
  faSquareCheck,
  faIcons,
  faCar,
  faMapLocationDot,
  faRing,
  faStar,
  faUpRightFromSquare,
  faImages,
  faAngleLeft,
  faAngleRight
);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
