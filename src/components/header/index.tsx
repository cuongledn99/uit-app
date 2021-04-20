import { IonHeader, IonToolbar, IonIcon, IonLabel } from "@ionic/react";
import { chevronBackOutline, addCircleOutline } from "ionicons/icons";

type HeaderProps = {
  label: String;
};
const Header = (props: HeaderProps) => {
  return (
    <IonHeader className="">
      <IonToolbar color="primary toolbar_trans">
        <div
          className="d-flex align-items-center"
          style={{ justifyContent: "space-between", padding: "1rem" }}
        >
          <div>
            <IonIcon icon={chevronBackOutline} />
            <IonLabel>{props.label}</IonLabel>
          </div>
          <img
            className="img_notify"
            src="https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/82909481_2476287612619959_3949131624473427968_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=OjmiQEKupekAX9YwA4-&_nc_ht=scontent-xsp1-3.xx&oh=2e6d56697a90a0376eb04ce17e78fa10&oe=60A020B2"
          />
        </div>
      </IonToolbar>
    </IonHeader>
  );
};

export { Header };
