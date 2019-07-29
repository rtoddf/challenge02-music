import axios from "axios";

export default axios.create({
  baseURL: "http://itunes.apple.com",
  params: {
    entity: "musicTrack",
    limit: 25
  }
});
