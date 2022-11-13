import { Axios } from "axios";
import { randomUUID } from "crypto";

const axios = new Axios();

class Events {
  private pseudo_id: string;

  constructor() {
    this.pseudo_id = randomUUID();
  }

  identify_user() {
    return this.pseudo_id;
  }

  sendEvent(eventName: string) {
    const body = {
      name: eventName,
      user_id: this.pseudo_id,
    };

    axios.post("https://y2gyrx.deta.dev/send", body).then((res) => {
      console.log(res);
    });
  }
}

const eventsInstance = new Events();

export default eventsInstance;
