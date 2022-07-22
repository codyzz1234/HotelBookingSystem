import { db } from "../firebase/firebase";
import { collection,getDocs,getDoc,addDoc,updateDoc,deleteDoc,doc} from "firebase/firestore";

const reserveCollectionRef = collection(db,"Reserves")

class ReserveService{
    addReserve = (newReservation) =>{
        return addDoc(reserveCollectionRef,newReservation)
    }
    
    updateReserve = (id,updatedReservation) =>{
        const reserveDoc = doc(db,"Reserves",id);
        return updateDoc(reserveDoc,updatedReservation)
    }

    deleteReserve = (id) => {
        const reserveDoc = doc(db,"Reserves",id);
        return deleteDoc(reserveDoc);
    }
    getAllReserve = () =>{
        return getDocs(reserveCollectionRef);
    }

    getReserve = (id) =>{
        const reserveDoc = doc(db,"Reserves",id);
        return getDoc(reserveDoc);
    }
}


export default ReserveService