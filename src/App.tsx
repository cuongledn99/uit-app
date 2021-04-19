import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipsisHorizontalOutline, giftOutline, gridOutline, handLeftOutline, notificationsOutline, square, timeOutline, triangle } from 'ionicons/icons';
import Home from './pages/Home';
import Order from './pages/Order';
import History from './pages/History';
import Notification from './pages/Notification';
import Personal from './pages/Personal';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/Home">
            <Home/>
          </Route>
          <Route exact path="/Order">
            <Order/>
          </Route>
          <Route path="/History">
            <History/>
          </Route>
          <Route path="/Notification">
            <Notification/>
          </Route>
          <Route path="/Personal">
            <Personal/>
          </Route>
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Home" href="/Home">
              <IonIcon icon={gridOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Order" href="/Order">
            <IonIcon icon={handLeftOutline} />
            <IonLabel>Đặt Món</IonLabel>
          </IonTabButton>
          <IonTabButton tab="History" href="/History">
            <IonIcon icon={timeOutline} />
            <IonLabel>Lịch sử GD</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Notification" href="/Notification">
            <IonIcon icon={notificationsOutline} />
            <IonLabel>Thông báo</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Personal" href="/Personal">
            <IonIcon icon={ellipsisHorizontalOutline} />
            <IonLabel>Cá nhân</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
