import {CommonActions} from '@react-navigation/native';
import {Keyboard, Platform} from 'react-native';

let navigatorLocal;

function setTopLevelNavigator(navigatorRef) {
  navigatorLocal = navigatorRef;
}

function navigate(routeName, params, key) {
  if (navigatorLocal !== null) {
    navigatorLocal.dispatch(
      CommonActions.navigate({
        name: routeName,
        params,
        key,
      }),
    );
  }
}

function navigateBack() {
  // alert("In navigateReset"+ JSON.stringify( _navigator.state.nav));
  if (navigatorLocal !== null) {
    if (Platform.OS === 'ios') {
      Keyboard.dismiss();
      setTimeout(() => {
        navigatorLocal.dispatch(CommonActions.back());
      }, 500);
    } else {
      navigatorLocal.dispatch(CommonActions.back());
    }
  }
}

export default {setTopLevelNavigator, navigate, navigateBack};

/**
 * // NavigationService.js

import { NavigationActions,StackActions  } from 'react-navigation';
import {NativeModules,Keyboard, Platform} from 'react-native';
import { CustomLogger } from '../../../utils/customLogger';
import { getStore } from '../../../core/globalStore';
import { setStoredRoute } from '../controller/actions';

let _navigator;
function foreSeeIncrementPage() {
  NativeModules.Foresee.incrementPage();
}

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params,key) {
  //alert("In navigate"+JSON.stringify( _navigator.state.nav));
  foreSeeIncrementPage();

  if(_navigator !== null) {
    _navigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params,
        key
      })
    );
  }

}

function navigateWithinTab(tabName,routeName, params) {
  //CustomLogger.log("navigateWithinTab" + tabName+ " " + routeName+ " " + params)
  //alert("In navigate"+JSON.stringify( _navigator.state.nav));
  if(_navigator !== null) {
    _navigator.dispatch(
      NavigationActions.navigate({
        routeName : tabName,
        action : NavigationActions.navigate({
          routeName: routeName,
          params : params
        })
      })
    );
  }
}

function navigateReset(routeName, params) {
  //alert("In navigateReset"+ JSON.stringify( _navigator.state.nav));
  if(_navigator !== null) {
    _navigator.dispatch(
      StackActions.reset({
        index: 0,
        key: null,
        actions: [
          NavigationActions.navigate({
            routeName,
            params,
          }),
        ],
      }),
    );
  }
}

function navigatePop(routeName, params) {
  // alert("In navigateReset"+ JSON.stringify( _navigator.state.nav));
  const routes = getCurrentRoute()
  const appKeyObjects = routes.filter(function(item) {
    return item.key === 'App';
  })
  if(appKeyObjects.length > 0){
    const appKey = appKeyObjects[0]
    const currentRoute = appKey.routes[appKey.index]
    if(currentRoute !== null){
      let foundRoute = currentRoute.routes.filter(function(item) {
        return item.routeName === routeName;
      }).length > 0 ? true : false
      if(foundRoute){
        //reset to previous index
        let indexOfRoute = currentRoute.routes.findIndex(item => item.routeName === routeName)
        if(indexOfRoute > 0){
          let navigationRouteArray = currentRoute.routes.slice(0, indexOfRoute)
          let navigationActionArray = navigationRouteArray.map(route => {

            const {routeName, params} = route
            return NavigationActions.navigate({
             routeName,
              params,
            })
          })
          if(_navigator !== null) {
            _navigator.dispatch(
              StackActions.reset({
                index: 0,
                key: null,
                actions: navigationActionArray,
              }),
            );
          }

        }

      }
    }
  }
}

function navigateReplace(routeName, params) {
  //alert("In navigateReset"+ JSON.stringify( _navigator.state.nav));
  if(_navigator !== null) {
    _navigator.dispatch(
      StackActions.replace({
        routeName,
        params,
      }),
    );
  }
}

function activeTab() {
  const appRoute = getCurrentRoute().filter((el) => el.key === 'App');
  let activeRoute;
  if (appRoute.length > 0) {
    activeRoute = appRoute[0].routes[appRoute[0].index];
  }
  return activeRoute?.key;
}

function getCurrentRoute() {
  const route = _navigator.state.nav;
  /*while(route.routes) {
  route = route.routes[route.index]
  } */
//   return route.routes;
// }

// function navigatePush(routeName, params) {
//   //CustomLogger.log("navigatePush",routeName, params)
//   //alert("In navigateReset"+ JSON.stringify( _navigator.state.nav));
//   if(_navigator !== null) {
//     _navigator.dispatch(
//       StackActions.push({
//             routeName,
//             params,
//           }),
//     );
//   }
// }
// function navigateBack() {
//   //alert("In navigateReset"+ JSON.stringify( _navigator.state.nav));
//   if(_navigator !== null) {
//     if(Platform.OS === 'ios'){
//       Keyboard.dismiss();
//       setTimeout(() => {
//         _navigator.dispatch(NavigationActions.back());
//       },500);
//     } else {
//       _navigator.dispatch(NavigationActions.back());
//     }
//   }
// }
// // add other navigation functions that you need and export them

// // this also requires an entry in
// // app/modules/Account/controller/sagas.js
// //
// function navigateWithAuth(externalId, routeOrigin) {
//   const store = getStore();
//   const { login } = store.getState();

//   if (login.userQuickInfo && store !== null) {
//     store.dispatch(setStoredRoute(routeOrigin));
//     navigate(externalId, {
//       routeOrigin,
//     });
//   } else {
//     // let newRoute = '';
//     // if (routeOrigin === VET_INSIGHT_TILE) {
//     //   newRoute = externalId;
//     // }
//     // else {
//     //   if (routeOrigin === 'Shop') {
//     //     store.dispatch(setStoredRoute('MyPetsShop'));
//     //     newRoute = 'MyPetsShop';
//     //   } else {
//     //     store.dispatch(setStoredRoute('MyPetsHome'));
//     //     newRoute = 'MyPetsHome';
//     //   }
//     // }
//     navigate('Login', {
//       route: externalId,
//       routeOrigin,
//     });
//   }
// };

// // [TCM-6749] workaround StackAction.replace with custom delay (only for iOS)
// function navigateReplaceWithDelayForIos(routeName, params, delayms){
//   if (Platform.OS === 'ios') {
//     setTimeout(() => {
//       navigateReplace(routeName, params);
//     }, delayms);
//   } else {
//     navigateReplace(routeName, params);
//   }
// }

// export default {
//   navigate,
//   setTopLevelNavigator,
//   navigateReset,
//   navigateReplace,
//   navigateBack,
//   navigatePush,
//   navigateWithinTab,
//   getCurrentRoute,
//   navigatePop,
//   navigateWithAuth,
//   activeTab,
//   navigateReplaceWithDelayForIos,
//  };
