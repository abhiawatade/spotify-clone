import { fetchRequest } from "../api";
import { ENDPOINT } from "../common";

const loadUserProfile = () => {
  const defaultImage = document.querySelector("#default-image");
  const profileButton = document.querySelector("#user-profile-btn");
  const displayNameElement = document.querySelector("#display-name");

  const userinfo = fetchRequest(ENDPOINT.userinfo);
  console.log(userinfo);
};
document.addEventListener("DOMContentLoaded", () => {
  loadUserProfile();
});
