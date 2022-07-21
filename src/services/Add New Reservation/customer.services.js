import { db } from "../../firebase/firebase";
import { collection,getDocs,getDoc,addDoc,updateDoc,deleteDoc,doc} from "firebase/firestore";

const customerCollectionRef = collection(db,"Reserves")
class CustomerService{
    
    addReserve = (newReservation) =>{
        return addDoc(customerCollectionRef,newReservation)
    }
    
    updateReserve = (id,updatedReservation) =>{
        const reserveDoc = doc(db,"Customers",id);
        return updateDoc(reserveDoc,updatedReservation)
    }

    deleteReserve = (id) => {
        const reserveDoc = doc(db,"Customers",id);
        return deleteDoc(reserveDoc);
    }
    getAllReserve = () =>{
        return getDocs(customerCollectionRef);
    }

    getReserve = (id) =>{
        const reserveDoc = doc(db,"Customers",id);
        return getDocs(reserveDoc);
    }
}


export default CustomerService