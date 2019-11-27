import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { IonApp, IonRouterOutlet } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import Login from './pages/Login'
import Addresses from './pages/Addresses'
import Map from './pages/Map'
import Profile from './pages/Profile'
import Register from './pages/Register'
import Drivers from './pages/Drivers'
import RidesHistory from './pages/RidesHistory'
import Students from './pages/Students'
import User from './pages/User'
import store from './store'
import theme from './config/theme'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'

const App = () => (
    <IonApp>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <IonReactRouter>
                    <IonRouterOutlet>
                        <Route
                            path="/ridesHistory"
                            component={RidesHistory}
                            exact
                        />
                        <Route
                            path="/register/:type"
                            component={Register}
                            exact
                        />
                        <Route path="/addresses" component={Addresses} exact />
                        <Route path="/drivers" component={Drivers} exact />
                        <Route path="/map" component={Map} exact />
                        <Route path="/profile" component={Profile} exact />
                        <Route path="/students" component={Students} exact />
                        <Route path="/user" component={User} exact />
                        <Route path="/" component={Login} exact />
                        <Redirect to="/" />
                    </IonRouterOutlet>
                </IonReactRouter>
            </Provider>
        </ThemeProvider>
    </IonApp>
)

export default App
