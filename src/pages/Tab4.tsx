import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab3.css";
import { chevronBackOutline } from "ionicons/icons";
// import { ListNotification } from "./../components/ListNotification";
import { ListNotification } from "./../components/ListNotification";
import { useState } from "react";
import { Header } from "./../components/header";

const listNotifydata = [
  {
    id: 1,
    image:
      "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/82909481_2476287612619959_3949131624473427968_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=OjmiQEKupekAX9YwA4-&_nc_ht=scontent-xsp1-3.xx&oh=2e6d56697a90a0376eb04ce17e78fa10&oe=60A020B2",
    title: "Bạn vừa thanh toán 3000 cho bãi giữ xe",
    time: "Today, 12:30pm",
  },
  {
    id: 1,
    image:
      "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/82909481_2476287612619959_3949131624473427968_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=OjmiQEKupekAX9YwA4-&_nc_ht=scontent-xsp1-3.xx&oh=2e6d56697a90a0376eb04ce17e78fa10&oe=60A020B2",
    title: "Bạn vừa thanh toán 3000 cho bãi giữ xe",
    time: "Today, 12:30pm",
  },
  {
    id: 1,
    image:
      "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/82909481_2476287612619959_3949131624473427968_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=OjmiQEKupekAX9YwA4-&_nc_ht=scontent-xsp1-3.xx&oh=2e6d56697a90a0376eb04ce17e78fa10&oe=60A020B2",
    title: "Bạn vừa thanh toán 3000 cho bãi giữ xe",
    time: "Today, 12:30pm",
  },
  {
    id: 1,
    image:
      "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/82909481_2476287612619959_3949131624473427968_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=OjmiQEKupekAX9YwA4-&_nc_ht=scontent-xsp1-3.xx&oh=2e6d56697a90a0376eb04ce17e78fa10&oe=60A020B2",
    title: "Bạn vừa thanh toán 3000 cho bãi giữ xe",
    time: "Today, 12:30pm",
  },
  {
    id: 1,
    image:
      "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/82909481_2476287612619959_3949131624473427968_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=OjmiQEKupekAX9YwA4-&_nc_ht=scontent-xsp1-3.xx&oh=2e6d56697a90a0376eb04ce17e78fa10&oe=60A020B2",
    title: "Bạn vừa thanh toán 3000 cho bãi giữ xe",
    time: "Today, 12:30pm",
  },
  {
    id: 1,
    image:
      "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/82909481_2476287612619959_3949131624473427968_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=OjmiQEKupekAX9YwA4-&_nc_ht=scontent-xsp1-3.xx&oh=2e6d56697a90a0376eb04ce17e78fa10&oe=60A020B2",
    title: "Bạn vừa thanh toán 3000 cho bãi giữ xe",
    time: "Today, 12:30pm",
  },
  {
    id: 1,
    image:
      "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/82909481_2476287612619959_3949131624473427968_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=OjmiQEKupekAX9YwA4-&_nc_ht=scontent-xsp1-3.xx&oh=2e6d56697a90a0376eb04ce17e78fa10&oe=60A020B2",
    title: "Bạn vừa thanh toán 3000 cho bãi giữ xe",
    time: "Today, 12:30pm",
  },
  {
    id: 1,
    image:
      "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/82909481_2476287612619959_3949131624473427968_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=OjmiQEKupekAX9YwA4-&_nc_ht=scontent-xsp1-3.xx&oh=2e6d56697a90a0376eb04ce17e78fa10&oe=60A020B2",
    title: "Bạn vừa thanh toán 3000 cho bãi giữ xe",
    time: "Today, 12:30pm",
  },
  {
    id: 1,
    image:
      "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/82909481_2476287612619959_3949131624473427968_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=OjmiQEKupekAX9YwA4-&_nc_ht=scontent-xsp1-3.xx&oh=2e6d56697a90a0376eb04ce17e78fa10&oe=60A020B2",
    title: "Bạn vừa thanh toán 3000 cho bãi giữ xe",
    time: "Today, 12:30pm",
  },
  {
    id: 1,
    image:
      "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/82909481_2476287612619959_3949131624473427968_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=OjmiQEKupekAX9YwA4-&_nc_ht=scontent-xsp1-3.xx&oh=2e6d56697a90a0376eb04ce17e78fa10&oe=60A020B2",
    title: "Bạn vừa thanh toán 3000 cho bãi giữ xe",
    time: "Today, 12:30pm",
  },
  {
    id: 1,
    image:
      "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/82909481_2476287612619959_3949131624473427968_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=OjmiQEKupekAX9YwA4-&_nc_ht=scontent-xsp1-3.xx&oh=2e6d56697a90a0376eb04ce17e78fa10&oe=60A020B2",
    title: "Bạn vừa thanh toán 3000 cho bãi giữ xe",
    time: "Today, 12:30pm",
  },
];
const Tab4: React.FC = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <IonPage>
      <Header label="Thông báo" />
      <IonContent>
        <ListNotification listNotify={listNotifydata} />
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
