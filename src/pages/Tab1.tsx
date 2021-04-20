import {
  IonContent,
  IonRow,
  IonIcon,
  IonHeader,
  IonPage,
  IonBadge,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonMenu,
  IonItem,
  IonList,
  IonRouterOutlet,
  IonButton,
  IonMenuButton,
  IonAvatar,
  IonGrid,
  IonCol,
  IonLabel,
} from "@ionic/react";
import { useState } from "react";
import Card from "../components/Card";
import ExploreContainer from "../components/ExploreContainer";

import "./Tab1.css";
import { chatbubbleEllipsesOutline, cashOutline } from "ionicons/icons";
const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <div
            className="d-flex align-items-center"
            style={{ justifyContent: "space-between" }}
          >
            <img
              className="img_notify"
              src="https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/82909481_2476287612619959_3949131624473427968_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=OjmiQEKupekAX9YwA4-&_nc_ht=scontent-xsp1-3.xx&oh=2e6d56697a90a0376eb04ce17e78fa10&oe=60A020B2"
            />
            <IonSearchbar className="searchbar_home" />
            {/* <IonButton className="notification-button" color="light">
              <IonIcon icon={chatbubbleEllipsesOutline} >
                <IonBadge className="notifications-badge" color="danger">
                  11
                </IonBadge>
              </IonIcon>
            </IonButton> */}
            <button id="cart-btn" ion-button icon-only>
              <IonIcon
                className="icon_chat"
                icon={chatbubbleEllipsesOutline}
              ></IonIcon>
              <IonBadge id="cart-badge">10</IonBadge>
            </button>
          </div>
        </IonGrid>

        <IonGrid>
          <IonRow>
            <IonCol size="4">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* <IonIcon icon={cashOutline} /> */}
                <img
                  src="https://image.freepik.com/free-vector/location-icon_1083-93.jpg"
                  className="img_notify"
                />
                <p className="title_home">Giữ xe</p>
              </div>
            </IonCol>
            <IonCol size="4">
              <a
                href="./tab3"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                <img
                  src="https://nhakhoadananh.vn/wp-content/uploads/2020/05/flat-design-dollar-money-cash-icon-cash-vector-24347805.jpg"
                  className="img_notify"
                />
                <p className="title_home">Quản lý TK</p>
              </a>
            </IonCol>

            <IonCol size="4">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="https://cdn1.iconfinder.com/data/icons/university-indigo-vol-1/256/Canteen-512.png"
                  className="img_notify"
                />
                <p className="title_home">Canteen</p>
              </div>
            </IonCol>
            <IonCol size="4">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="https://cdn1.iconfinder.com/data/icons/university-indigo-vol-1/256/Canteen-512.png"
                  className="img_notify"
                />
                <p className="title_home">Canteen</p>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
