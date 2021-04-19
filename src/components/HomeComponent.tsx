import './HomeComponent.css';
import { IonButton, IonGrid, IonIcon, IonSearchbar, IonRow, IonCol} from '@ionic/react';
import { cashOutline, chatbubbleEllipsesOutline, fastFoodOutline, locationOutline, readerOutline, searchOutline } from 'ionicons/icons';

const HomeComponent: React.FC = () => {
    return (
      <div>
          <div >
              <div className="img">
                  <img src="../../public/icon/icon.png" />
              </div>
              <div className="search-bar">
                  <IonSearchbar className="searchbar-input.sc-ion-searchbar-md" />
              </div>
              <div className="icon-header">
                  <IonButton fill="clear"   >
                    <IonIcon  size="large" icon={chatbubbleEllipsesOutline}/>
                  </IonButton>
              </div>
          </div>
          <div className="content-home">
              <div>
                  <ul>
                      <IonGrid>
                            <IonRow>
                                <IonCol>
                                    <li className="list-menu">
                                        <IonButton fill="clear" expand="block" >
                                            <IonIcon icon={locationOutline} size="large" color="danger" slot="icon-only"/>
                                        </IonButton>
                                        <div>Giữ xe</div>
                                    </li>
                                </IonCol>
                                <IonCol col-6>
                                    <li className="list-menu">
                                        <IonButton fill="clear" expand="block">
                                            <IonIcon icon={cashOutline} size="large" color="success" slot="icon-only"/>
                                        </IonButton>
                                        <div>Quản lí TK</div>
                                    </li>
                                </IonCol>
                            </IonRow>
                            <IonRow justify-content-around>
                                <IonCol>
                                    <li className="list-menu">
                                        <IonButton fill="clear" expand="block" href="/Order">
                                            <IonIcon icon={fastFoodOutline} size="large" color="warning" slot="icon-only" />
                                        </IonButton>
                                        <div>Canteen</div>
                                    </li>
                                </IonCol>
                                <IonCol>
                                    <li className="list-menu">
                                        <IonButton fill="clear" expand="block">
                                            <IonIcon icon={readerOutline} size="large" color="primary" slot="icon-only"  />
                                        </IonButton>
                                        <div>Điểm danh</div>
                                    </li>
                                </IonCol>
                            </IonRow>
                      </IonGrid>
                  </ul>
              </div>
          </div>
        
      </div>
    );
  };
  
  export default HomeComponent;