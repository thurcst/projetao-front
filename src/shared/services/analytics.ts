import axios from "axios";
import uuid from 'react-native-uuid';

// const axios = new Axios();

class Events {
  private pseudo_id: string | number[];

  constructor() {
    this.pseudo_id = uuid.v4();
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
