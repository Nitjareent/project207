import firebase from '../../node_modules/firebase'
import '../../node_modules/firebase/empty-import'
import '../../node_modules/firebase/empty-import'
import '../../node_modules/firebase/empty-import'
import config from './config'
 
if (!firebase.apps.length) {
   firebase.initializeApp(config)
}
 
export default firebase