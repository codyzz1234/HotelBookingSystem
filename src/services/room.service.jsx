import { db } from "../firebase/firebase";
import { collection,getDocs,getDoc,addDoc,updateDoc,deleteDoc,doc} from "firebase/firestore";

const roomCollectionRef = collection(db,"Rooms")

class RoomService{
    addRoom = (newRoom) =>{
        return addDoc(roomCollectionRef,newRoom)
    }
    updateRoom = (id,updateRoom) =>{
        const reserveDoc = doc(db,"Rooms",id);
        return updateDoc(reserveDoc,updateRoom)
    }

    deleteRoom = (id) => {
        const reserveDoc = doc(db,"Rooms",id);
        return deleteDoc(reserveDoc);
    }
    getAllRooms = () =>{
        return getDocs(roomCollectionRef);
    }
    getSpecificRoom = (id) =>{
        const reserveDoc = doc(db,"Rooms",id);
        return getDocs(reserveDoc);
    }
}
export default RoomService;