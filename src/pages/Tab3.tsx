// @ts-nocheck
import {
  IonContent,
  IonHeader,
  IonItem,
  IonGrid,
  IonRow,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonAvatar,
  IonCol,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab3.css";
import { chevronBackOutline, addCircleOutline } from "ionicons/icons";
import { Header } from "../components/header";
import { useStoreState, useStoreActions } from "easy-peasy";
import { useEffect } from "react";

const USER_DATA = {
  name: "Huy Cuong",
};
const BALANCE = 200000;

const Tab3: React.FC = () => {
  const transactions = useStoreState((state) => state.globalStore.transactions);
  const fetchListTransactions = useStoreActions(
    (actions) => actions.fetchListTransaction
  );
  useEffect(() => {
    fetchListTransactions();
  }, []);

  return (
    <IonPage>
      <Header label={USER_DATA.name} />

      <IonContent>
        <div className="money_box ion-align-items-center">
          <IonCol size="6">
            <IonLabel className="money_title">Số dư</IonLabel>
            <p>{BALANCE}</p>
          </IonCol>
          <IonCol size="6">
            <div className="d-flex" style={{ justifyContent: "flex-end" }}>
              <IonIcon className="icon_plus" icon={addCircleOutline} />
            </div>
          </IonCol>
        </div>

        {transactions.map((data, index) => (
          <IonItem key={index}>
            <IonGrid>
              <IonRow>
                <IonCol size="2">
                  <img className="img_notify" src={data.img} />
                </IonCol>
                <IonCol size="10">
                  <div>
                    <IonLabel className="title_mail">{data.name}</IonLabel>
                    <div
                      className="d-flex"
                      style={{ justifyContent: "space-between" }}
                    >
                      <p className="time_mail">{data.date}</p>
                      <p className="time_mail">{data.amount}</p>
                    </div>
                  </div>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
